function isEven(number) {
    if (number === 0) return true;
    if (number === 1) return false;
    if (number < 0) {
        return isEven(-number);
    } else return isEven(number - 2);
};

console.log("Число -33 четное : " + isEven(-33));
console.log("Число 50 четное : " + isEven(50));
console.log("Число 75 четное : " + isEven(75));
console.log("Число -1 четное : " + isEven(-1));