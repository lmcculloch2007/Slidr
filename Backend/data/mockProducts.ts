import type {Product} from '../model/product.js'

export const products: Product[] = [
    {
        id: 1,
        name: "Doll",
        brand: "doll maker",
        category: "toys",
        rating: 5.0,
        price: 20,
        reviewCount: 120,
        reviews:[
            "This doll is amazing!",
            "Great quality",
            "The doll is terrible"
        ]
    }
];