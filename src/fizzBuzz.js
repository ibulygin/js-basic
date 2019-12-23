function fizzBuzz () {
    let maxNumber = 100;

    for(let i = 0; i < maxNumber; i++) {
        i === 0 
            ? console.log(i)
            : ((i % 3 === 0) && (i % 5 === 0))
                ? console.log("FizzBuzz")  
                : i % 3 === 0
                    ? console.log("Fizz")
                    : i % 5 === 0
                        ? console.log("Buzz")
                        : console.log(i);
    }
};

fizzBuzz();
