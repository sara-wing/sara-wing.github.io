// DEFINE YOUR FUNCTION BELOW:

const sumArray = arr => {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
};

sumArray([1,2,3]);
sumArray([2,2,2,2]);
sumArray([50,50,1]);
