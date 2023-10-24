// Double Trouble Create a function that changes a given array to list each original element twice, retaining original order. Convert [4,"Ulysses", 42,false] to [4, 4, "Ulysses", "Ulysses", 42, 42, false, false].

const doubleTrouble = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i], arr[i]);
    }
    return newArr;
};

console.log(doubleTrouble([4, "Ulysses", 42, false]));

// Create a standalone function that accepts two arrays and combines their values sequentially into a new array, at alternating indices starting with first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], return new array containing [1,10,2,20,30,40]. Second: combine the two arrays’ values into the first array, instead of into a new array. Much more fun!

const combineTwoArray = (arr1, arr2) => {
    const combinedArray = [];
    const maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < arr1.length) {
            combinedArray.push(arr1[i]);
        }

        if (i < arr2.length) {
            combinedArray.push(arr2[i]);
        }
    }

    return combinedArray;
};

console.log(combineTwoArray([1, 2], [10, 20, 30, 40]));

// Remove Blanks Create a function that, given a string, returns all of that string’s contents, but without blanks. If given the string " Pl   ayTha  tF   u  nkyM  usi    c  ", return "PlayThatFunkyMusic".

const removeBlanks = (string) => {
    // return string.trim(" ").split(" ").join("");
    return string.split(" ").join("");
};

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

// String: Get Digits Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

// unfinished needs 0 as well but Number(char) is excludes 0 because it is a falsy value.
const getDigits = (string) => {
    const strToArr = string.split("");
    const result = strToArr.filter((char) => {
        return Number(char);
    });
    return result.join("");
};

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). Given " there's no free lunch  -  gotta pay yer way. ", return "TNFL-GPYW". Given "Live from New York, it's Saturday Night!", return "LFNYISN".

const acronym = (str) => {
    const capitalizedArr = str.toUpperCase().split(" ");
    let result = [];

    for (let i = 0; i < capitalizedArr.length; i++) {
        const word = capitalizedArr[i];
        result.push(word[0]);
    }

    return result.join("");
};

console.log(acronym(" there's no free lunch - gotta pay yer way. "));
