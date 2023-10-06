'use strict';


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
}  

let arr=["manu","devu","unni","achu"];
let  [a,b,c,d] = arr

console.log(a,b,c,d);


let [x,,y]=restaurant.categories;
[x,y]=[y,x]
console.log(x,y);