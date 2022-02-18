//Morning activities

//Activity 1
//Make an array of 3 your favourite songs. 

let faveSongs = ['Kid Cudi-Mr Rager','MellowHigh-Yu','Doja Cat-Addiction'];
console.log(faveSongs);

faveSongs.push('Dido-Thankyou');
faveSongs.push('Pixies-The happening');
console.log(faveSongs);

faveSongs.pop()
console.log(faveSongs);


//Activity 2
//Using MDN choose one of the following methods: map(), shift(), unshift(), splice(), unsplice().

//map() creates a new array from calling a function for every array element

let nums = [2,56,23,8,99,12];

//console.log(nums.map(Math.cos));

console.log(nums.map.length);



//Afternoon Activities

//Activity 1
//Create an array that lists your favourite films, up to 5 elements.
//Add 2 more using a method. 
//Use a loop to cycle through the array

let favefilms = ['Natural born killers','Girl Interrupted','Mandy','Django Unchained','The Craft'];

favefilms.push('I Tonya','Jennifers Body');

 for (let i = 0; i < favefilms.length; i ++){
     console.log(favefilms[i])
 }


 //Activity 2
 //Generate 6 random numbers between 1 and 50 and log them to the console

 let max = 50;
 let min =1;
 
 let randnum = (Math.floor(Math.random() * (max - min + 1)) + min);

 console.log(randnum);
 //Activity 3
 //If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.

 let zeroToNine = [];

 for (let y=9; y>=0; y-=1){
     zeroToNine.push(y);
 }
 console.log(zeroToNine);


  //Activity 4
 //Displays 4 films stored in an array. Use a for loop to show each film in the array. Use an if statement to check if the 3rd film in the array is Fight Club. If it is, return “Yay it’s Fight Club”. If it isn’t return "Put on Fight Club!"

 let films = ['Girl Interrupted','The Matrix','Fight Club','Titane'];

 for (i=0; i<films.length; i++){
     console.log(films[i]);
 }
 if (films[2] == 'Fight Club'){
     console.log('Yay, its fight club')}
else{
    console.log('Put on Fight Club!');
}