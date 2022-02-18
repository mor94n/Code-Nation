//Activity 1
//Create a variable called age. Write an if statement that logs “Yes I can serve you” if the age is greater than 17 and else logs “You aren’t old enough”

let age = 16
let country = 'Barbados'

if ((age >= 18 && country == 'UK'||(age >= 21 && country == 'US')||(age >= 16 && country == 'Barbados'))){
    console.log('You can drink!')
}
else if ((age < 18 && country == 'UK') || (age <21 && country == 'US') ||(age < 16 && country == 'Barbados')) {
    console.log('Go away, you are underage')
}
else {
    console.log('Can i see some identification')
}

//Activity 2
//Create a variable for any pizza topping. 
//Create a switch statement, if the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza.” 
//If you don’t mind having Pepperoni for example log to the console “I don’t mind having ${topping} on my pizza.
//Finally, for any topping you don’t like log “${topping} should not be on a pizza.

let pizza_topping = 'olives';
switch(true){
    case pizza_topping = 'olives':
        console.log('These are important ingredients for my pizza.');
        break;
    case pizza_topping = 'pepperoni':
        console.log(`I dont mind having ${pizza_topping} on my pizza.`);
        break;
    case pizza_topping = 'tomatoes':
        console.log(`${pizza_topping} should not be on a pizza.`);
        break;
    default:
        console.log('This is ok to have on a pizza');
}

//Activity3
//Create a variable called password. 
//Check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console. 


let password = 'Password123';
let counter = password.length;

if (counter>= 8){
    console.log('Strong password')
}
else {
    console.log('Password too weak.')
}

//Activity 4
//Create a variable called num. Check if the variable is divisible by 3 or 5. If it is, log “This number is divisible by 3 or 5”. Otherwise log something else.

let num = 15;

switch(true){
    case num % 3 ==0:
    case num%5 ==0:
        console.log('This number is divisible by 3 or 5!')
        break;
    default:
        console.log('This number is not divisible by 3 or 5!')
}

//Activity 9
//Create a variable called word that takes a string.
// Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false.

let input = 'sears';
let word = input.toLowerCase();

let first = word[0];
let last = word[-1];

if (first === last){
    console.log(true)
}
else {
    console.log(false)
}



//Activity 10
//Create two variables called num1 and num2.
//Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together.

let num1 = 20;
let num2 = 37;
let sum = num1 + num2;
let product = num1 * num2;

if (sum % 2 == 0){
    console.log(`This is the sum of the numbers: ${sum}`)
}
else{
    console.log(`This is the product of the numbers: ${product}`)
}