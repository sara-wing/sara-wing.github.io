// DEFINE YOUR FUNCTION BELOW:

const isShortsWeather = (temperature) => {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
};

isShortsWeather(80);
isShortsWeather(48);
isShortsWeather(75);
