function findMinimum(firstNumber, secondMinimum) {
    if (firstNumber > secondMinimum) return secondMinimum;

    return firstNumber;
};

console.log("Из чисел 0 и 0 меньшше равно " + findMinimum(0, 0));
console.log("Из чисел 1 и 2 меньшше равно " + findMinimum(1, 2));
console.log("Из чисел -10 и -9 меньшше равно " + findMinimum(-10,-9));
console.log("Из чисел -20 и 2 меньшше равно " + findMinimum(-20, 2));