//Objects are containers that can store data
//Key-Value pairs store the data


let offer = 'None';
let time = 1200;
const cafe ={
    name: 'Fino',
    seatingCapacity: 100,
    specialOffers: true,
    drinks: [               //Values can be any data type, can even be functions
        'Americano',        // or arrays.
        'Latte',
        'Hot Chocolate',
        'Mocha',
        'Frappe'],
    breakfastOffer: 'Free cake with coffee',
    lunchOffer:'half price on sandwiches',
    noOffer:'there is no offer on today'

};

//let’s create an object called person with a key called name and set the value to your name.
//Add another key called age.

let person = {
    name: 'Morgan',
    age:19,
    favcolor: 'Green',
    gender: 'female',
    hasPets: true,
    faveSongs: ['mr rager','favourite thing','sensitive']
};

console.log(person.faveSongs);

//Keys ^       ^Values


//Alarm activity
//Create a key called weekendAlarm, with a value saying “no alarm needed” and a key called weekdayAlarm, with a value saying “get up at 7am”.
//Create a variable called day and one called alarm. If day is Saturday or Sunday, set alarm to weekendAlarm.If day is a weekday, set alarm to weekdayAlarm.

let alarm = '';
let day = 'friday';

let routine = {
    weekdayAlarm: 'get up at 7am!',
    weekendAlarm: 'no alarm needed',

};

if (day == 'monday'||day =='tuesday'||day =='wednesday'||day=='thursday'||day=='friday'){
    alarm = routine.weekdayAlarm;
    console.log(alarm);
}else if (day == 'saturday'||day=='sunday'){
    alarm = routine.weekendAlarm;
    console.log(alarm);
}else{
    console.log('give a weekday')
}