import type { Product} from '../model/product.js';

export interface SearchFilters{

    query?: string;
    minPrice?: number;
    maxPrice?: number;
    minRating?: number;
    brand?: string;
    category?: string;
}

export function searchProducts(
    products: Product[],
    filters: SearchFilters = {}
): Product[]{

    const { query, minPrice, maxPrice, minRating, brand, category} = filters;

    const keywords = (query ?? '')
        .toLowerCase()
        .split(/\s+/)
        .filter(word => word.length > 0);

    return products.filter(product => {
        // Search by name or brand: every keyword must appear in one of them
        if (keywords.length > 0) {
            const searchable = `${product.name} ${product.brand}`.toLowerCase();
            if (!keywords.every(word => searchable.includes(word))) {
                return false;
            }
        }

        // Price range (checks against undefined so a value of 0 still works)
        if (minPrice !== undefined && product.price < minPrice) return false;
        if (maxPrice !== undefined && product.price > maxPrice) return false;

        // Rating
        if (minRating !== undefined && product.rating < minRating) return false;

        // Brand and category (exact match, ignoring capitalization)
        if (brand && product.brand.toLowerCase() !== brand.toLowerCase()) return false;
        if (category && product.category.toLowerCase() !== category.toLowerCase()) return false;

        return true;

    });
}
