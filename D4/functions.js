let coffeeIsGrinding = true;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log('Stopping the grind...');
        coffeeIsGrinding = true;
    } else {
        console.log('Grinding is about to begin...');
        coffeeIsGrinding = false;
    }
}


const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount}, from ${accnum}.`);
}

cashWithdrawal(65, 638291);


const addUp = (num1,num2) => {
    return num1 + num2
}

console.log(addUp(5,78));