
import type { Product } from '../model/product.js';

export type ComparisonPriority = 'price' | 'rating' | 'reviews' | 'balanced';

export function compareProducts(
    products: Product[],
    category: string,
    priority: ComparisonPriority,
    subcategory?: string
) {
    // Filter products by category and optional subcategory
    const filteredProducts = products.filter(product =>
        product.category.toLowerCase() === category.toLowerCase() &&
        (!subcategory ||
            product.subcategory?.toLowerCase() === subcategory.toLowerCase())
    );

    // At least two products are needed
    if (filteredProducts.length < 2) {
        throw new Error('At least 2 products are required in this category');
    }

    // Set weights based on the user's priority
    let priceWeight = 0.4;
    let ratingWeight = 0.4;
    let reviewWeight = 0.2;

    if (priority === 'price') {
        priceWeight = 0.6;
        ratingWeight = 0.2;
        reviewWeight = 0.2;
    } else if (priority === 'rating') {
        priceWeight = 0.2;
        ratingWeight = 0.6;
        reviewWeight = 0.2;
    } else if (priority === 'reviews') {
        priceWeight = 0.2;
        ratingWeight = 0.2;
        reviewWeight = 0.6;
    }

    // Get the minimum and maximum values
    const prices = filteredProducts.map(product => product.price);
    const ratings = filteredProducts.map(product => product.rating);
    const reviewCounts = filteredProducts.map(product => product.reviewCount);

    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    const minRating = Math.min(...ratings);
    const maxRating = Math.max(...ratings);

    const minReviews = Math.min(...reviewCounts);
    const maxReviews = Math.max(...reviewCounts);

    // Calculate a weighted score for each product
    const scoredProducts = filteredProducts.map(product => {

        // Lower price is better
        const priceScore = maxPrice === minPrice
            ? 1
            : (maxPrice - product.price) / (maxPrice - minPrice);

        // Higher rating is better
        const ratingScore = maxRating === minRating
            ? 1
            : (product.rating - minRating) / (maxRating - minRating);

        // More reviews is better
        const reviewScore = maxReviews === minReviews
            ? 1
            : (product.reviewCount - minReviews) / (maxReviews - minReviews);

        const total =
            priceScore * priceWeight +
            ratingScore * ratingWeight +
            reviewScore * reviewWeight;

        return {
            product,
            rawScore: total * 100,
            score: Math.round(total * 10000) / 100
        };
    });

    // Sort by the unrounded score, highest first
    const sortedProducts = [...scoredProducts].sort(
        (a, b) => b.rawScore - a.rawScore
    );

    // Select the top two products
    const topTwo = sortedProducts.slice(0, 2);

    const first = topTwo[0];
    const second = topTwo[1];

    // Tell TypeScript both products exist
    if (!first || !second) {
        throw new Error('Not enough products to compare');
    }

    // Check whether the top two have equal scores
    const isTie = Math.abs(first.rawScore - second.rawScore) < 0.000001;

    // Generate an explanation
    let explanation = '';

    if (isTie) {
        explanation =
            `${first.product.name} and ${second.product.name} are tied ` +
            `with a score of ${first.score} when prioritizing ${priority}.`;
    } else {
        const strengths: string[] = [];
        const tradeoffs: string[] = [];

        // Compare prices
        if (first.product.price < second.product.price) {
            strengths.push(
                `$${(second.product.price - first.product.price).toFixed(2)} cheaper`
            );
        } else if (first.product.price > second.product.price) {
            tradeoffs.push(
                `costs $${(first.product.price - second.product.price).toFixed(2)} more`
            );
        }

        // Compare ratings
        if (first.product.rating > second.product.rating) {
            strengths.push(
                `rated ${(first.product.rating - second.product.rating).toFixed(1)} stars higher`
            );
        } else if (first.product.rating < second.product.rating) {
            tradeoffs.push(
                `rated ${(second.product.rating - first.product.rating).toFixed(1)} stars lower`
            );
        }

        // Compare review counts
        if (first.product.reviewCount > second.product.reviewCount) {
            strengths.push(
                `has ${first.product.reviewCount - second.product.reviewCount} more reviews`
            );
        } else if (first.product.reviewCount < second.product.reviewCount) {
            tradeoffs.push(
                `has ${second.product.reviewCount - first.product.reviewCount} fewer reviews`
            );
        }

        explanation =
            `${first.product.name} scored ${first.score} vs ${second.score} ` +
            `for ${second.product.name} when prioritizing ${priority}.`;

        if (strengths.length > 0) {
            explanation += ` Its advantages: ${strengths.join(', ')}.`;
        }

        if (tradeoffs.length > 0) {
            explanation += ` Its trade-offs: ${tradeoffs.join(' and ')}.`;
        }
    }

    // Return the comparison results
    return {
        category,
        subcategory: subcategory ?? null,
        priority,
        isTie,
        winner: isTie ? 'Tie' : first.product.name,
        explanation,
        products: topTwo.map(item => ({
            name: item.product.name,
            brand: item.product.brand,
            price: item.product.price,
            rating: item.product.rating,
            reviewCount: item.product.reviewCount,
            score: item.score
        }))
    };
}
