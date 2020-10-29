// DEFINE YOUR FUNCTION BELOW:

const lastElement = arr => {
    if (arr.length === 0) {
        return null;
    } else {
    return arr[arr.length-1];
    }
};

lastElement([]);
lastElement([1,2,3]);
