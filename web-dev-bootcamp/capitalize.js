// DEFINE YOUR FUNCTION BELOW:

const capitalize = (str) => {
    let firstLetter = str[0].toUpperCase();
    let slicedStr = str.slice(1);
    let newStr = `${firstLetter}${slicedStr}`;
    return newStr;
};

capitalize('eggplant');
