// string methods
const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
console.log('mEeNakshi'.toUpperCase());

//example2
const passanger='jOnAs'  //we want Jonas

const lowercase=passanger.toLowerCase()

const correctName=lowercase[0].toUpperCase()+lowercase.slice(1)
console.log(correctName);


//comparing emails

const email=' HirIngHRBot39@gmAIL.cOM \n';
const login='hiringhrbot39@gmail.com'

const correctedemail= email.toLowerCase().trim();

console.log(correctedemail);

if(login===correctedemail){
    console.log('email is correct !!you can now login');
}


//replacing(replace mutate cheyilla)
const priceGB='222,93€';

const priceUS=priceGB.replace('€','$').replace(',','.')
console.log(priceUS);


const announcement='All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door','gate'));
console.log(announcement.replaceAll('door','gate'));


//regular expression
console.log(announcement.replace(/door/g,'gate'));//here g means global or all


//BOOLEANS(includes,startsWith)
const plane='A320neo'
console.log(plane.includes('A32'));
console.log(plane.includes('meen'));

console.log(plane.startsWith('a'));

if(plane.startsWith('A32') && plane.endsWith('neo')){
    console.log('its in new airbus family');
}


//practice exersice

const checkBaggage=function(items){
    let lower=items.toLowerCase().trim();
    if(lower.includes('knife') || lower.includes('gun')){
        console.log('not permitted');
    }else{
        console.log('happy journey');
    }

};
checkBaggage('I have a laptop ,some food and a pocket knife');
checkBaggage('socks and camera');
checkBaggage('Got some snacks and a gun for protection')