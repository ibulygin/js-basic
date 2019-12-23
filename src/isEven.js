function isEven (number) {
    return number === 0
        ? true
        : number === 1 
            ? false
            : number < 0
                ? isEven(-number)
                : isEven(number - 2);            
}

console.log(isEven(-1));