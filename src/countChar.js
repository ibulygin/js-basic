function countChar(word, symbol) {
    const regExp = new RegExp(symbol, "g");

    return word.match(regExp).length;
};

function countBs(str, fn) {
    const searchCharacter = "B";
    
    return fn(str, searchCharacter);
};


console.log("Вводим строку 'BfffdfBzbbB' в функцию countBs() колличество символов 'B' равно " + countBs("BBBggggb", countChar));
console.log("Вводим строку 'BfffdfBzbbB' в функцию countChar() ищем символ 'B', количество в строке равно " + countChar("BBBggggb", "B"));
