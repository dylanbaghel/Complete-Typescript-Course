/**
 * Nullish Coalescing
 */

const user = null;
/** 
 * If Data is Being Fetched From Backend or Accessing DOM Elements then the data could be null.
 */

const storedInput = user ?? 'Anonymous';
/**
 * In Javascript:
 *  --> const storedInput = user ? user : 'Anonymous';
 */
console.log(storedInput);