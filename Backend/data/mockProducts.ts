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

    },
    {
        id: 2,
        name: "Toy Car",
        brand: "Hot Wheels",
        category: "Toys",
        price: 15,
        rating: 4.5,
        reviewCount: 200,
        reviews: ["Great toy!", "Good quality"]
    },
    {
        id: 3,
        name: "Teddy Bear",
        brand: "Toy Company",
        category: "Toys",
        price: 30,
        rating: 4.8,
        reviewCount: 350,
        reviews: ["Very soft!", "Excellent gift"]
    }
];