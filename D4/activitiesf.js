//Activity 1

let factorial = (n) => {
    if ((n === 0)||(n === 1)){
        return 1;
    } else { 
        return (n*factorial(n-1));
    }
    }
    
    console.log(factorial(33))

//Activity 2

let orderCount = 0;

const takeOrder = (t1,t2) => {
    console.log(`Pizza with ${t1} and ${t2}!`);
    orderCount ++; 
}
console.log(takeOrder('pepperoni','Olive'))
console.log(orderCount);
console.log(takeOrder('cheese','sweetcorn'))
console.log(orderCount);

//Activity 3
//Cash machine time! Let’s create one that:
//Dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you’re trying to withdraw!


let pinnum = (2654);
let balance = (89274892);

const cashMachine = (pin,amount) => {
    if ((pin === pinnum) && (amount<=balance)){
        console.log(`Please take your £${amount}.;`)
    }
    else if ((pin===pinnum)&&(amount>balance)){
        console.log('Insufficient funds.')
    }
    else if ((pin!==pinnum)&&(amount<=balance)){
        console.log('Wrong pin, Please try again')
    }
    else{
        console.log('Wrong pin')
    }
}

cashMachine(2653, 583);