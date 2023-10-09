///////reverse,concat,JOIN,AT///////////////

let arr=["a","b","c","d","e"]

let m=arr.reverse()

console.log(m);

console.log(arr);

/* reversing array , original array nae mutate cheyyum */


//CONCAT//

let arr1=["a","b","c"]

let num1=[1,2,3]

let op=arr1.concat(num1)

console.log(op);


//JOIN [join elements of array using anything]

let res=op.join('-')

console.log(res);

//at
let h=[5,2,6,4]

let n=h.at(-1)/*at slice polae alla aa position ile element annu tarunne */
let p=h.slice(-1)
console.log(n);
console.log(p);/*slice cheyumpo array slice cheyth mattoru array anu tharunne */

console.log("Meenu".at(2));
console.log("arjun".at(3));
