function arrayToList(array) {
    let list = null;

    for(let i = array.length-1; i >= 0 ; i--){
        list = {value: array[i], rest: list};
    };

    return list;
};

function listToArray(list) {
    let array = [];

    for (i = list; i ; i = i.rest){
        array.push(i.value);
    }
    return array;
};

function prepend(value, list) {
    return {value, rest: list};
};

function nth(list, number) {
    if(!list) return undefined;
    if(number === 0) return list.value
    else return nth(list.rest, number-1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20