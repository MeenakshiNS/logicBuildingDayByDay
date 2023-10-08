// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

/*
1]we have to display date and time

2]in current time - display hour,minute,second

4]🤔HOW TO DISPLAY DAY IN alphabets(dbts)

3]🤔how to display PM OR AM (dbts)


 */

let date = new Date().toDateString();
// console.log(typeof(new Date()));

// console.log(date.getDay());
// date.getDay();
// date.toDateString()

console.log(`Today is : ${date}`);

let hour = new Date().getHours();

let pmam = hour >= 12 ? "PM" : "AM";
console.log(
  `Current Time is : ${hour}${pmam}:${new Date().getMinutes()}:${new Date().getSeconds()}`
);
