function replaceQuotes(str) {
    let regExp = /^'|(\s)'|'(\s)|'$/g;

    return str.replace(regExp, '$1"$2');
};

console.log(replaceQuotes("Hello? Are'yuo fine 'hi'"));