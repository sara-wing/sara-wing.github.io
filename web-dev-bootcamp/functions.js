// isEven – return true if number is even

function isEven(num) {
    return num % 2 === 0;
};

// factorial v1 

function factorial(num) {
    if(num < 0){
        return -1; 
    } else if (num == 0){ 
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
};

// factorial v2

function factorial2(num) {
    let result = 1;
    for(let i = 2; i <= num; i++){
        result *= i;
    }
    return result;
};

// kebabToSnake – replace dashes with underscores

function kebabToSnake(str) {
    let newStr = str.replace(/-/g, "_");
    return newStr;
};
