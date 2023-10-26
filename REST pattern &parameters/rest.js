//REST PATTERN AND PARAMETERS//

/*spread operator is used to build new arrays and 
pass multiple values to function
 */

/*
😹 rest operator nu same syntax thanne annu (like spread operator)

😹collect multiple elements and condense them into an array

😹just opposite of spread(spread unpack an array ,while rest is to pack elements into an array)

🫡use of rest:pass multiple argument to function and pack array
 */ 


//this is spread , becoz ... on right side of =
const arr=[1,2,...[3,4]]
console.log(arr);

//REST, becoz ... on left side of =

const [a,b,...others]=[1,2,3,4,5,6]
console.log(others);

/*rest operator destructre cheyyatha array ile elemnts nae collect cheyth 
vere oru array aakki store cheyyum */

////////////////////////////////////////////////////////////////////////////

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours:{
        thu:{
            open:12,
            close:22,
        },
        fri:{
            open:11,
            close:23,
        },
        sat:{
            open:0,
            close:24,
        },
    },
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[ starterIndex],this.mainMenu[mainIndex]]
    },
    oredrpizza: function(incredient1,incredient2,incredient3) {
        console.log(`let\'s oredr pizza with incredients ${incredient1},${incredient2},${incredient3}`);
        
    },
    orderPizz:function(mainIngredient,...otherIncredient){
        console.log(mainIngredient);
        console.log(otherIncredient);
    }
}  



//DESTRUCTURING

//spread and rest 
//left side rest and right side spread
console.log(...restaurant.mainMenu,...restaurant.starterMenu);
const [h,,c,...otherss]=[...restaurant.mainMenu,...restaurant.starterMenu]
console.log(h,c,otherss);
/*note : rest operator apozhum last avum varunnat.

destructuring cheyumpo only 1 rest operator matre kanu*/




//🫡REST OPERATOR IN oBJECTS

// console.log(restaurant.openingHours);
const {sat,...workingdays}=restaurant.openingHours;
console.log(workingdays);

//IN FUNCTIONS(used spread operator in argument)

function add(...numbers){
    console.log(numbers);
   return numbers.reduce((a,c)=>a+=c,0)
}

console.log(add(2,3));
console.log(add(1,2,3,4,5));
const p=[12,12] //imp(here spread is used to take out each numbers)
console.log(add(...p));


restaurant.orderPizz('mushroom','onion','olives','spnich')