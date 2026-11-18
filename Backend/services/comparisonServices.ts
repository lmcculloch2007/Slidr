
import type { Product } from '../model/product.js';

export type ComparisonPriority = 'price' | 'rating' | 'reviews';

export function compareProducts(
    products: Product[],
    category: string,
    priority: ComparisonPriority
) {
    // Find products in the selected category
    const filteredProducts = products.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
    );

    // Make sure there are enough products
    if (filteredProducts.length < 2) {
        throw new Error('At least 2 products are required in this category');
    }

    // Sort products based on user priority
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (priority === 'price') {
            return a.price - b.price;
        }

        if (priority === 'rating') {
            return b.rating - a.rating;
        }

        if (priority === 'reviews') {
            return b.reviewCount - a.reviewCount;
        }

        return 0;
    });

    // Get the two best products
    const topTwo = sortedProducts.slice(0, 2);

    return {
        category,
        priority,
        winner: topTwo[0]?.name ?? 'No winner',
        products: topTwo.map(product => ({
            name: product.name,
            brand: product.brand,
            price: product.price,
            rating: product.rating,
            reviewCount: product.reviewCount
        }))
    };
}
