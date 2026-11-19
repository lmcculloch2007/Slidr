import type { Product } from '../model/product.js';

export const products: Product[] = [
    {
        id: 1,
        name: 'Doll',
        brand: 'Doll Maker',
        category: 'toys',
        subcategory: 'dolls',
        price: 20,
        rating: 5.0,
        reviewCount: 120,
        reviews: [
            'Great doll!',
            'Very good quality',
            'My daughter loves it!'
        ]
    },
    {
        id: 2,
        name: 'Toy Car',
        brand: 'Hot Wheels',
        category: 'toys',
        subcategory: 'cars',
        price: 15,
        rating: 4.5,
        reviewCount: 200,
        reviews: [
            'Fast car!',
            'Fun toy',
            'Good value for the price'
        ]
    },
    {
        id: 3,
        name: 'Teddy Bear',
        brand: 'Toy Company',
        category: 'toys',
        subcategory: 'plush',
        price: 30,
        rating: 4.8,
        reviewCount: 350,
        reviews: [
            'Very soft!',
            'Excellent gift',
            'Great quality'
        ]
    },
    {
        id: 4,
        name: 'Wireless Headphones',
        brand: 'SoundMax',
        category: 'electronics',
        subcategory: 'headphones',
        price: 80,
        rating: 4.6,
        reviewCount: 450,
        reviews: [
            'Excellent sound quality',
            'Battery lasts a long time',
            'Comfortable to wear'
        ]
    },
    {
        id: 5,
        name: 'Bluetooth Speaker',
        brand: 'AudioPro',
        category: 'electronics',
        subcategory: 'speakers',
        price: 55,
        rating: 4.3,
        reviewCount: 300,
        reviews: [
            'Great bass',
            'Easy to connect',
            'Could be louder'
        ]
    },
    {
        id: 6,
        name: 'Gaming Mouse',
        brand: 'TechGear',
        category: 'electronics',
        subcategory: 'mice',
        price: 40,
        rating: 4.9,
        reviewCount: 600,
        reviews: [
            'Very responsive',
            'Perfect for gaming',
            'Comfortable grip'
        ]
    },
    // New products so each subcategory has something to compare against
    {
        id: 7,
        name: 'Kids Headphones',
        brand: 'SoundMax',
        category: 'electronics',
        subcategory: 'headphones',
        price: 35,
        rating: 4.4,
        reviewCount: 280,
        reviews: [
            'Volume limiter is great',
            'Sturdy enough for my son',
            'Fits small heads well'
        ]
    },
    {
        id: 8,
        name: 'Toy Truck',
        brand: 'Hot Wheels',
        category: 'toys',
        subcategory: 'cars',
        price: 15,
        rating: 4.5,
        reviewCount: 200,
        reviews: [
            'Looks just like the real thing',
            'Kids play with it daily',
            'Good value'
        ]
    }
];