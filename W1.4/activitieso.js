//Activity 1
//Let’s edit our person object to include… A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”

let person = {
    name: 'Morgan',
    age:19,
    favcolor: 'Green',
    gender: 'female',
    hasPets: true,
    faveSongs: ['mr rager','favourite thing','sensitive'],
    sayHi:()=>{
        console.log(`Hi im ${person.name}`)}
};

console.log(person.sayHi());

//Activity 2
//Create an object called pet with the key values of: name, typeOfPet, age, colour And methods called eat and drink. 
//They should return a string saying [Your Pet Name] is eating/drinking. 


let pet ={
    name:'Chewbacca',
    pettype:'cat',
    age:'unknown',
    colour:'brown',
    eat:()=>{
        console.log(`${pet.name} is eating`)},
    drink:()=>{
        console.log(`${pet.name} is drinking`)}
};

console.log(pet.eat());

//Activity 3
//Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices And methods called drinksOrdered and foodOrdered.
//They should return a string saying [Your order] is … with all items chosen with costs and total costs.

order = ('latte','soup');

var drinks = {
    d1: "latte",
    d1Price: 1.5,
    d2: "mocha",
    d2Price: 3,
    d3: "tea",
    d3Price: 2
     };
   
var food = {
    f1: "sandwich",
    f1Price: 5,
    f2: "soup",
    f2Price: 4,
    f3: "wrap",
    f3Price: 5.5
     };
    

    
function total() {
    console.log(`your total is: £(${drink.price} + ${food.price}`);
      }

