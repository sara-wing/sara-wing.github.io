// print out elements of array in reverse

function printReverse(arr) {
    let reversedArr = arr.reverse();
    console.log(reversedArr);
};

// another printReverse function solution 

function printReverse(arr) {
    for(let i = arr.length-1; i >= 0; i--){
        console.log(arr[i]);
    }
};

// returns true if all elements in array are identical

const isUniform = (arr) => {
    let check = arr.every(val => val === arr[0]);
    return check;
};

// another isUniform function solution 

function isUniform2(arr) {
    let initialValue = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
            return true;
        }
};

// returns sum of all numbers in array

function sumArray(arr) {
    let sum = 0;
    arr.forEach(function(num){
        sum += num;
    });
    return sum;
};

// another sumArray function solution

const sumArray2 = arr => arr.reduce((a, b) => a + b, 0);

// returns maximum in array 

function max(arr) {
    let max = Math.max(...arr);
    return max; 
};
