/*
we have an array 
construct another array ,with some elements in the beginning */

const arr=[3,4,5]

const newArr=[1,2,...arr]
console.log(newArr);
/*
spread operator take all the elments out of the array and write it manually */

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[ starterIndex],this.mainMenu[mainIndex]]
    },
    oredrpizza: function(incredient1,incredient2,incredient3) {
        console.log(`let\'s oredr pizza with incredients ${incredient1},${incredient2},${incredient3}`);
        
    }
}  

const newAr=[...restaurant.categories,'meenu'];
console.log(newAr);

/*spread operator is similar to destructuring

this is used in places where values are separated by commas*/

/*
NOTES:
======
using spread operator we can 
1]make shallow copy
2]merge 2 arrays together
*/

//copy array
const mainMenuCopy=[...restaurant.mainMenu]
console.log(mainMenuCopy);

//merger 2 array
const menu=[...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);

/*
😈spread operator array il matram alla work cheyunnat

😈it work on all iterables(strings,array,maps,sets,objects)

objects are not iterables

😈template literal nu ullil spread opertor use cheyyan padilla
(becoz multiple values separated by a comma ath expect cheyunilla.

   multiple values separated by a comma   is only expected when we pass 
   arguments into a function or when we bulit a new array )

*/

const name="meenakshi";

const newName=[...name,'','n.s']
console.log(newName);


//////////////////////////
let incredient=['chhese','spinach','cucumber'];
restaurant.oredrpizza(...incredient)


//oBJECTS

const newRestaurant ={...restaurant,founder:"marthandan",foundedYear:9999}
console.log(newRestaurant);

//copy of object(shallow copy ayat kondann restaurant inte name maranjath)
newRestaurant.name='i am new restaurant 😹'
const restaurantCopy={...newRestaurant}
console.log(restaurantCopy.name);
console.log(restaurant.name);