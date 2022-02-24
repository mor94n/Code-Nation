//questions
//uses of const?? to shorten variable value



//console.log("All Around the World").charAt(7).toUpperCase();

let i = 10;
i += 2;

console.log(i);

//variable types:
// let = changable variable
// const = unchangable variable
//var = legacy... dont use

//activity 1

let name = 'Morgan';
let age = '19';
let colour = 'green';


age = '91';
name = 'Blorgan';
colour = 'dark green';

console.log(`My name is ${name} i am ${age} years old and my favourite colour is ${colour}!`);

//activity 2 
//Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console.

let breakfast = 'Bacon Sandwich';
let lunch = 'Chicken';
let dinner = 'wine';

console.log(`for breakfast i had ${breakfast}. for lunch i had ${lunch}. for dinner i had ${dinner}`);

breakfast = 'toast';
lunch = 'doritos';
dinner = 'lasagne';
console.log(`Tomorrow i will eat ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner.`)

//activity 3
//Create a program that calculates the number of days from today to your birth date

const bday = new Date("05/04/2002");
const today = new Date("02/15/2021");
  
const Difference_In_Time = today.getTime() - bday.getTime();

const DifferenceInDays = Difference_In_Time / (1000 * 3600 * 24);

console.log('The number of days since my birthday is ' + Math.round(DifferenceInDays));