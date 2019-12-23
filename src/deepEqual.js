function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) return true;

    if ( firstObject === null || typeof firstObject !== "object" ||
    secondObject === null || typeof secondObject !== "object") return false;
        
    let keysA = Object.keys(firstObject);
    let keysB = Object.keys(secondObject);

    for (let key of keysA){
        if (!keysB.includes(key) || !deepEqual(firstObject[key],secondObject[key])) return false;
    }
    return true;
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true