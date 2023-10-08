// =====================SLICE==========================================================================

/*
slice method original array mutate cheyilla

ath oru new array return cheyyum
 */

const arr =[1,2,3,4]

console.log(arr.slice(1));

console.log(arr.slice(1,3));
/*index 1,2 il ulla element vare display aaku.
index 3 il ullat console cheyyan pattilla */


console.log(arr.slice(-2));
/*array il ulla last 2 elements matram matiyenkil negative 2 cheytha mati */
console.log(arr.slice(-1));


console.log(arr.slice(0,-2));
/*arrayile 0th index tott slice cheyyanam and last 2 elements avoid cheyyanam */


console.log(arr.slice());
/*array dae shallow copy create cheyyum */

console.log([...arr]);
/*creating new array[]    and expanding original array into that[...arr]

ethum array dae shallow copy create cheyyum.
*/


console.log(arr);

// ============================SPLICE======================================================================

console.log(arr.splice(2));

console.log(arr);

/*splice and slice thammil ulla difference 

splice- will mutate original array
slice- will not mutate original array


*/

console.log(arr.splice(-1));
/*last il ulla element matram kittum */