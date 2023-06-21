// 1) Счетчик целых чисел:

function count(number) {
    let count = 0;
    const strNumber = Math.abs(number).toString();
    
    for (let i = 0; i < strNumber.length; i++) {
        if (!isNaN(parseInt(strNumber[i]))) {
            count++;
        }
    }
    
    return count;
}

console.log(count(318)); // 3
console.log(count(-92563)); // 5
console.log(count(4666)); // 4
console.log(count(-314890)); // 6
console.log(count(654321)); // 6
console.log(count(638476)); // 6

// 2) Преобразование объектов в массивы

// ???

// 3) Префиксы против суффиксов

function isPrefix(word, prefix) {
    return word.startsWith(prefix);
}

function isSuffix(word, suffix) {
    return word.endsWith(suffix);
}

console.log(isPrefix("автоматизация", "авто-")); // true
console.log(isSuffix("арахнофобия", "-фобия")); // true
console.log(isPrefix("ретроспектива", "суб-")); // false
console.log(isSuffix("призвание", "-логия")); // false

// 4) Сумма чисел в строке

function addNums(numbers) {
    const numArray = numbers.split(',').map(Number);
    return numArray.reduce((sum, num) => sum + num, 0);
}

console.log(addNums("2, 5, 1, 8, 4")); // 20
console.log(addNums("1, 2, 3, 4, 5, 6, 7")); // 28
console.log(addNums("10")); // 10

// 5) Объединение массивов

// ???