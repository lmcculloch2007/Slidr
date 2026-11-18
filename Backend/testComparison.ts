import { products } from './data/mockProducts.js';
import { compareProducts } from './services/comparisonServices.js';


const result = compareProducts(products, 'price');

console.log(JSON.stringify(result, null, 2))