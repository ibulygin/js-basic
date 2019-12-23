function countChar(word, symbol) {
    regExp = new RegExp(symbol, 'g');
    return word.match(regExp).length;
};

console.log(countChar('тааааатата', 'а'));