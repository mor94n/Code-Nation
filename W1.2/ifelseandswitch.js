if (1 != '1') {
    console.log(true);
}
else {
    console.log(false);
}

let place = 'Manc';
let weather = 'cloudy';
if (place == 'Manc' && weather == 'sunny'){
    console.log('Check again')
}
else if (place == 'Manc' && weather == 'rain'){
    console.log('yup')
}

const grade = 87;
switch(true){
    case grade >= 70:
        console.log('Distinction!');
        break;
    case grade >= 60:
        console.log('Merit!');
        break;
    case grade >= 50:
        console.log('Pass!');
        break;
    default:
        console.log('Failed!')


}