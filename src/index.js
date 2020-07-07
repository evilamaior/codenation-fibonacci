'use strict'

const fibonacci = () => {
    const fibonacciNumbers = [0, 1];
    while (fibonacciNumbers[fibonacciNumbers.length - 1] <= 350) {
        fibonacciNumbers.push(fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2]);
    }
    return fibonacciNumbers;
}

const isFibonnaci = (num) => fibonacci().includes(num);

// outra maneira de achar os primeiros 350 números da série
//
// const fibonacciRecursion = (n) => {
//     return (n < 2) ? n : fibonacciRecursion(n - 2) + fibonacciRecursion(n - 1)
// }
//
// const fiboNumbersArray = (x) => {
//     const fiboNumbers = [];
//     for (let i = 0; i <= x; i++) {
//         fiboNumbers.push(fibonacciRecursion(i));
//     }
//     return fiboNumbers;
// }
// console.log(fiboNumbersArray(34));

module.exports = {
    fibonacci,
    isFibonnaci
}
