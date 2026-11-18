import type { Product } from '../model/product.js';

export type ComparisonPriority = 'price' | 'rating' | 'reviews';

export function compareProducts(
    products: Product[],
    priority: ComparisonPriority
) {
    if (products.length === 0) {
        throw new Error('No products to compare');
    }

    const winner = products.reduce((best, current) => {
        if (priority === 'price') {
            return current.price < best.price ? current : best;
        }

        if (priority === 'rating') {
            return current.rating > best.rating ? current : best;
        }

        if (priority === 'reviews') {
            return current.reviewCount > best.reviewCount ? current : best;
        }

        return best;
    });

    return {
        priority,
        winner: winner.name,
        products: products.map(product => ({
            name: product.name,
            price: product.price,
            rating: product.rating,
            reviewCount: product.reviewCount
        }))
    };
}