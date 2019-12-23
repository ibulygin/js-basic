function every(array, func) {
    for (let item of array){
        if (!func(item)) return false
    }
    return true;
};

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
