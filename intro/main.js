const array = ['a', 'b', 'a', 'c', 'a', 'd'];
const array2 = [1, 2, 3, 4, 5];

const of =function indexOf(arr, searchElement) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

console.log(of(array, 'c'));


const last=function lastIndexOf(arr, searchElement) {
    let number = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            number = i;
        }
    }

    return number;
}

console.log(last(array, 'a'));

const includ=function includes(arr, searchElement) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return true;
        }
    }
    return false;
}

console.log(includ(array, 'a'));

const some =function some(array2, callback) {
    for (let i = 0; i < array2.length; i++) {
        if (callback(array2[i], i, array2)) {
            return true;
        }
    }
    return false;
}

const hasEvenNumber = some(array2, function (element) {
    return element % 2 === 0;
});
console.log(hasEvenNumber);
module.exports ={of,last,some,includ}