'use strict'

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline[0]);
console.log(plane[1]);
console.log('abcd'[0]);

console.log(airline.length);
console.log("meenakshi".length);

console.log(airline.indexOf("A"));
console.log(airline.lastIndexOf("A"));
console.log(airline.indexOf("Portugal"));
console.log(airline.indexOf("portugal")); //-1

console.log("meenu".indexOf("e"));


console.log(airline.slice(4));
console.log(airline.slice(4,8));

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(0,airline.lastIndexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1)); //here +1 is used to remove the space in the front 

console.log(airline.slice(-2));
console.log(airline.slice(1,-1));//1st poisiton il tudangum and last position edukilla

//write a function that  receives an aeroplane seat and log where its a middle seat or not

function checkMiddleSeat(seat){
    //B  AND E are middle seats
    const s=seat.slice(-1);
    if(s==='B' || s==='E'){
        console.log('middle seat');
    }else{
        console.log('not middleseat');
    }
}

checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')





