function findMinimum(firstNumber, secondMinimum) {
    return (isNaN(firstNumber)) | (isNaN(secondMinimum)) 
        ? console.log('Аргументы должны быть числами')
        : firstNumber === secondMinimum 
            ? console.log('Числа равны')
            : firstNumber > secondMinimum
                ? console.log(secondMinimum)
                : console.log(firstNumber);
};

findMinimum(-2, -3);