
import { products } from './data/mockProducts.js';
import { compareProducts } from './services/comparisonServices.js';

// User chooses a category and priority
const category = 'toys';
const priority = 'rating';

const result = compareProducts(products, category, priority, );

console.log(compareProducts(products, 'electronics', 'price', 'headphones'));

// Same category, different priority
console.log(compareProducts(products, 'electronics', 'rating', 'headphones'));

// Toy Car and Toy Truck are identical, so this returns a tie
console.log(compareProducts(products, 'toys', 'balanced', 'cars'));

console.log(JSON.stringify(result, null, 2));
