'use strict';


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[ starterIndex],this.mainMenu[mainIndex]]
    }
}  

let arr=["manu","devu","unni","achu"];
let  [a,b,c,d] = arr

console.log(a,b,c,d);


let [x,,y]=restaurant.categories;
[x,y]=[y,x]
console.log(x,y);

//receiving 2 return values from a function//
console.log(restaurant.order(2,0));
let n=restaurant.order(2,0)
//destructure that array 
const [k,l]= n
console.log(k,l);


//NESTED ARRAY DESTRUCTURING//
const nested=[2,4,[5,6]];
const [i,,j]=nested;
console.log(i,j);
//nested destructuring
const [e,,[g,h]]=nested;
console.log(e,g,h);

//DEFAULT VALUE
const [f=1,q=1,r=1]=[3,4]
console.log(f,q,r);

/*evide default value ayit 1 koduthu ,so that undefined anel default value nae edukkum */