// DEFINE YOUR FUNCTION BELOW:

const returnDay = (num) => {
    let dayOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num < 1 || num > 7) {
        return null;
    } else {
    return dayOfTheWeek[num - 1];
    }
};

returnDay(1);
returnDay(7);
returnDay(4);
returnDay(0);
