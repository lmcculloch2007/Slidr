
import type { Product } from '../model/product.js';

export const products: Product[] = [
    {
        id: 1,
        name: 'Doll',
        brand: 'Doll Maker',
        category: 'toys',
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
        price: 40,
        rating: 4.9,
        reviewCount: 600,
        reviews: [
            'Very responsive',
            'Perfect for gaming',
            'Comfortable grip'
        ]
    }
];
