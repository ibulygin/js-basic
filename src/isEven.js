function isEven(number) {
    if (number === 0) return true;
    if (number === 1) return false;
    if (number < 0 ) {
        return isEven(-number);
    } else return isEven(number - 2);            
}

console.log("Число -32 четное : " + isEven(-32));
console.log("Число 32 четное : " + isEven(32));
console.log("Число -33 четное : " + isEven(-33));
console.log("Число 32 четное : " + isEven(33));