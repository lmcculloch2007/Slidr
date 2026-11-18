
import { products } from './data/mockProducts.js';
import { compareProducts } from './services/comparisonServices.js';

// User chooses a category and priority
const category = 'toys';
const priority = 'rating';

const result = compareProducts(products, category, priority);

console.log(JSON.stringify(result, null, 2));
