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

// Count Non-Spaces Accept a string and return the number of non-space characters found in the string. For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

const nonSpaceCharacters = (str) => {
    let count = 0;
    for (const character of str) {
        if (character === " ") {
            count++;
        }
    }
    return str.length - count;
};

console.log(nonSpaceCharacters("Honey pie, you are driving me crazy"));

// ["abc", "defg", "a", "xy"], 3; => ["abc", "defg"];

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than length from the array.
const removeShorterStr = (strings, length) => {
    // const result = [];

    // for (const string of strings) {
    //     if (string.length >= length) {
    //         result.push(string);
    //     }
    // }
    // return result;

    return strings.filter((str) => str.length >= length);
};

console.log(removeShorterStr(["abc", "defg", "a", "xy"], 3));

// Integer to Roman Numerals
// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.

const integerToRoman = (num) => {
    let result = "";
    const dic = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    };
    const digits = Object.keys(dic).reverse();

    for (const value of digits) {
        while (num >= value) {
            if (num - value >= 0) {
                result += dic[value];
                num -= value;
            }
        }
    }

    return result;
};

console.log(integerToRoman(949));

const isValidParens = (str) => {
    const open = "(";
    const close = ")";
    const stack = [];

    for (const char of str) {
        if (char === open) {
            stack.push(open);
        } else if (char === close) {
            if (stack.length === 0 || stack.pop() !== open) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValidParens("Y(3(p)p(3)r)s"));
console.log(isValidParens("N(0(p)3"));

// Braces Valid

const openingVersionOfClosing = (brace) => {
    if (brace === "]") {
        return "[";
    }
    if (brace === "}") {
        return "{";
    }
    if (brace === ")") {
        return "(";
    }
};

const isValidBraces = (str) => {
    const stack = [];
    const openBraces = ["(", "[", "{"];
    const closeBraces = [")", "]", "}"];

    for (const char of str) {
        if (openBraces.includes(char)) {
            stack.push(char);
        } else if (closeBraces.includes(char)) {
            if (
                stack.length === 0 ||
                stack.pop() !== openingVersionOfClosing(char)
            ) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValidBraces("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]"));
console.log(isValidBraces("W(a{t}s[o(n{ c}o)m]e )h[e{r}e"));
console.log("__________________");

// Is Palindrome

const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i].toLowerCase() !== str[str.length - i - 1].toLowerCase()) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("Racecar"));
console.log(isPalindrome("a x a"));
console.log("__________________");

// Longest Palindrome

// For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. Given "what up, daddy-o?", return "dad". Given "uh... not much", return "u". Include spaces as well (i.e. be strict, as in previous challenge): given "Yikes! my favorite racecar erupted!", return "e racecar e". Strings longer or shorter than complete words are OK. Second: re-solve the above problem, but ignore spaces, tabs, returns, capitalization and punctuation. Given "Hot puree eruption!", return "tpureeerupt".

function longestPalindrome(str) {
    str = str.toLowerCase();
    let longest = "";

    for (let i = 1; i < str.length - 1; i++) {
        let left = i - 1;
        let right = i + 1;
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }

        const oddLengthPalindrome = str.slice(left + 1, right);

        if (oddLengthPalindrome.length > longest.length) {
            longest = oddLengthPalindrome;
        }
    }
    if (longest.length === 1) {
        return str[0];
    }

    return longest;
}

console.log(longestPalindrome("what up, daddy-o?")); // "dad"
console.log(longestPalindrome("uh... not much")); // u
console.log(longestPalindrome("Yikes! my favorite racecar erupted!")); // e racecar e
