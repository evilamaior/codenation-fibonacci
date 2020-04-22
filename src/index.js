'use strict'

const fibonacci = () => {
    const fibonacciNumbers = [0, 1];
    while (fibonacciNumbers[fibonacciNumbers.length - 1] <=350) {
        fibonacciNumbers.push(fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2]);
    }
    return fibonacciNumbers;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
