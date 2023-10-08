// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy


let date=new Date();


let dd=date.getDate()
 let mm=date.getMonth()+1;

 let yyyy=date.getFullYear();

 console.log(dd);
 console.log(mm);
 console.log(yyyy);
 console.log(`${mm}-${dd}-${yyyy}`);