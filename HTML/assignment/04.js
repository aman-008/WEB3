// Write a function called sum that finds the sum from 1 to a number

function findSum1toN(num){
    let sum = 0;
    for(let i=1;i<=num;i++){
        sum += i;
    }
    return sum;
}

let totalSum = findSum1toN(5);
console.log("sum of all number ", totalSum);