//given an array of forecasted maximum temperature,
//the thermometer displays a string with these temperatures.

//eg: [17,21,23] will print 
//"...17C in 1 days...21C in 2 days...23C in 3 days..."


/*
step1: array transforme to string , separated by ...

       what is the X days?ans)index+1

step 2: transform this array into a string with degree C.
string needs to contain day , that is index +1
add ... between the elements and  
start and end of string
*/ 


function printForeCast(temp){
     let str=""
     for(let i=0;i<temp.length;i++){
      str+= `...${temp[i]}°C in ${i+1} days`
    }
//    return temp.toString();
return str ;

   
}

let op=printForeCast([17,21,23])
console.log(op+"...")


