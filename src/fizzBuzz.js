function fizzBuzz () {
    const maxNumber = 100;
    
    for ( let i = 0; i < maxNumber; i++){
        let output = ""
        if (i % 3 === 0) output += "Fizz"
        if (i % 5 === 0) output += "Buzz"
            
        console.log( output || i);
    }
};

fizzBuzz();
