// Ascending and descending

const x=[3,7,1,9,6]
// =============================================
// const ascending = x.sort((a,b)=>a-b)
// console.log(ascending);
/*this is how we will sort in ascending order */

// ===============================================


// const descendig = x.sort((a,b)=>b-a)
// console.log(descendig);
// ===========================================================
/*so sort method will mutate the original array 

but we dont want to mutate the original array in frontend framework like react

in react how we will sort array is given below*/

const ascending = x.slice().sort((a,b)=>a-b)

const descending =x.slice().sort((a,b)=>b-a) 

console.log(ascending);

console.log(descending);