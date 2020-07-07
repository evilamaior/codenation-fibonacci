'use strict'

const fibonacci = () => {
    const fibonacciNumbers = [0, 1];
    while (fibonacciNumbers[fibonacciNumbers.length - 1] <= 350) {
        fibonacciNumbers.push(fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2]);
    }
    return fibonacciNumbers;
}

const fibonacciRecursion = (n) => {
    return (n < 2) ? n : fibonacciRecursion(n - 2) + fibonacciRecursion(n - 1)
}

const fiboNumbersArray = (x) => {
    const fiboNumbers = [];
    for (let i = 0; i <= x; i++) {
        fiboNumbers.push(fibonacciRecursion(i));
    }
    return fiboNumbers;
}

console.log(fiboNumbersArray(33));
// console.log(fibonacciRecursion());

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
