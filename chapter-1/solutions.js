// Biggie Size Given an array, write a function that changes all positive numbers in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].

const makeItBig = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr[i] = "big";
        }
    }
    return arr;
};

console.log(makeItBig([-1, 3, 5, -5]));

// Print Low, Return High Create a function that takes array of numbers. The function should print the lowest value in the array, and return the highest value in the array.

const printLow = (arr) => {
    let highest = arr[0];
    let lowest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            highest = arr[i];
        }
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
    }
    console.log(lowest);
    return highest;
};
console.log(printLow([-4, 8, 12, 80, -5]));

//  Print One, Return Another Build a function that takes array of numbers. The function should print second-to-last value in the array, and return first odd value in the array.

const printOneReturnAnother = (arr) => {
    let secondLast = arr[arr.length - 2];
    console.log(secondLast);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return arr[i];
        }
    }
};
console.log(printOneReturnAnother([2, 3, 6, 8, 29, 7]));

//  Double Vision Given array, create a function to return a new array where each value in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.

const double = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
};

console.log(double([1, 2, 3]));

// Count Positives Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

const countPositives = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
        arr[arr.length - 1] = count;
    }
    return arr;
};

console.log(countPositives([-1, 1, 1, 1]));

//Even and Odds

const evenAndOdds = (nums) => {
    for (let i = 0; i < nums.length - 2; i++) {
        let first = nums[i],
            second = nums[i + 1],
            third = nums[i + 2];
        if (first % 2 !== 0 && second % 2 !== 0 && third % 2 !== 0) {
            console.log("Odds:", [first, second, third]);
            i += 2;
        } else if (first % 2 === 0 && second % 2 === 0 && third % 2 === 0) {
            console.log("Evens:", [first, second, third]);
            i += 2;
        }
    }
};
evenAndOdds([1, 3, 5, 2, 4, 6]);

// Increment the seconds

const incrementSecunds = (array) => {
    for (let i = 1; i < array.length; i += 2) {
        array[i] += 1;
    }
    return array;
};
console.log(incrementSecunds([1, 3]));

// Previous lenght
const previousLength = (words) => {
    let prev = words[0];
    for (let i = 1; i < words.length; i++) {
        let temp = words[i];
        words[i] = prev.length;
        prev = temp;
    }
    return words;
};
console.log(previousLength(["apple", "banana", "peach"]));

// Add seven to Most
// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

const addSeventoMost = (arr) => {
    let seven = [];
    for (let i = 0; i < arr.length; i++) {
        seven.push(arr[i] + 7);
    }
    return seven;
};
console.log(addSeventoMost([20, 30, 40]));

// Reverse Array
// Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3].

const reverseArray = (array) => {
    let middle = Math.floor(array.length / 2);
    for (let i = 0; i < middle; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
};
console.log("----------");
console.log(reverseArray([3, 1, 6, 4, 2]));

// Outlook: Negative
// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

const outlookNegative = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            array[i] = array[i] - 2 * array[i];
        }
    }
    return array;
};

console.log("----------");
console.log(outlookNegative([1, -3, 5]));

// Always Hungry
// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". If no array elements are "food", then print "I'm hungry" once.

function alwaysHungry(strings) {
    const isFood = strings.some((ele) => ele === "food");
    if (isFood) {
        console.log("yummy");
    } else {
        console.log("I'm hungry");
    }
}

console.log("----------");
alwaysHungry(["apple", "food", "banana"]);
alwaysHungry(["apple", "cherry", "banana"]);

// Swap Toward the Center
// Given array, swap first and last, third and third-to-last, etc. Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapTowardAndCenter(array) {
    const mid = Math.floor(array.length / 2);
    for (let i = 0; i < mid; i = i + 2) {
        const temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
    return array;
}

console.log("----------");
console.log(swapTowardAndCenter([true, 42, "Ada", 2, "pizza"]));
console.log(swapTowardAndCenter([1, 2, 3, 4, 5, 6]));

// Scale the Array
// Given array arr and number num, multiply each arr value by num, and return the changed arr.
