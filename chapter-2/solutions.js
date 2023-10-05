// Threes and Fives Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 but not both. Display the final sum in the console.
//Second: Create betterThreesFives(start,end) that allows you to enter arbitrary start and end values for your range. Think of threesFives()as betterThreesFives(100,4000000).

const threesFives = () => {
    let finalSum = 0;
    for (let i = 100; i <= 4000000; i++) {
        if ((i % 3 === 0 || i % 5 !== 0) && (i % 3 !== 0 || i % 5 === 0)) {
            finalSum += i;
        }
    }
    console.log(finalSum);
};

threesFives();

const betterThreesFives = (start, end) => {
    let finalSum = 0;
    for (let i = start; i <= end; i++) {
        if ((i % 3 === 0 || i % 5 !== 0) && (i % 3 !== 0 || i % 5 === 0)) {
            finalSum += i;
        }
    }
    console.log(finalSum);
};

betterThreesFives(100, 4000000);

//  Generate Coin Change

// Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). Accept a number of American cents, compute and print how to represent that amount with smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents).

//Second: can you simplify/shorten your code? Example output, given (94): // 94 cents can be represented by: quarters:3 dimes:1 nickels:1 pennies:4

// Third: add half-dollar (50 cents) and dollar (100 cents) coins with 40 additional characters or less.

const generateCoinChange = (cents) => {
    const quarters = Math.floor(cents / 25); // 94 / 25 = 3.76  => 3
    const dimes = Math.floor((cents - quarters * 25) / 10); // 94 - (3 * 25) = 19 / 10 = 1.9 => 1
    const nickels = Math.floor((cents - quarters * 25 - dimes * 10) / 5); // 94 - (3 * 25) - (1 * 10) = 94 - 75 - 10 = 9 / 5 = 1.8 => 1
    const pennies = cents - quarters * 25 - dimes * 10 - nickels * 5; // 94 - (3 * 25) - (1 * 10) - (1 * 5) = 94 - 75 - 10 - 5 = 4;

    console.log(
        `quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`
    );
};

generateCoinChange(94);

// Messy Math Mashup Create a function messyMath(num) that will return the following sum: add all integers from 0 up to the given num, except for the following special cases of our count value:

// 1. If current count (not num) is evenly divisible by 3, don’t add to sum; skip to the next count;

// 2. Otherwise, if current count is evenly divisible by 7, include it twice in sum instead of once;

// 3. Regardless of the above, if current count is exactly 1/3 of num, return -1 immediately. For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.

const messyMath = (num) => {
    let sum = 0;
    // if (num % 3 === 0) return -1;
    for (let i = 0; i < num; i++) {
        if (i % 3 === 0) {
            continue;
        } else if (i % 7 === 0) {
            sum = sum + i * 2;
        } else {
            sum += i;
        }
    }
    return sum;
};
// console.log(messyMath(10));

// Twelve-Bar Blues Write a function that console.logs the number 1, then "chick", then "boom", then "chick", then 2, then "chick", "boom", "chick" – continuing the same cycle for each number up to (including) 12.

const twelveBar = () => {
    for (let i = 1; i <= 12; i++) {
        console.log(i, "chick", "boom", "chick");
    }
};
twelveBar();

// let num = 1;
// while (num <= 12) {
//     console.log(num, "chick", "boom", "chick");
//     num++;
// }

//  Fibonacci: Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc). Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

const fibonacci = (size) => {
    let fibSeq = [0, 1];
    let next = 1;
    while (fibSeq.length <= size) {
        fibSeq.push(next);
        next = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];
    }
    return fibSeq[size];
};

// console.log(fibonacci(7));

// Sum to One Digit
//  Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

function sumToOne(num) {
    let sum = 0;

    let strNum = String(num);
    for (let i = 0; i < strNum.length; i++) {
        sum += Number(strNum[i]);
    }
    return sum;
}
function sumOfDigits(number) {
    const sum = sumToOne(number);
    let strSum = String(sum);
    let sum2 = 0;
    for (let i = 0; i < strSum.length; i++) {
        sum2 += Number(strSum[i]);
    }
    return sum2;
}
function finalSumOfDigits(num) {
    const sum = sumOfDigits(num);
    let strSum = String(sum);
    let finalSum = 0;
    for (let i = 0; i < strSum.length; i++) {
        finalSum += Number(strSum[i]);
    }
    return finalSum;
}

console.log(finalSumOfDigits(777));

// Clock Hand Angles: Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs." For an input parameter seconds of 119730 (which is equivalent to 9:15:30 plus 24 hours!), you should log "Hour hand: 277.745 degs. Minute hand: 93 degs. Second hand: 180 degs." Note: in the second example, the angle for the minute hand is not simply 90 degrees; it has advanced a bit further, because of the additional 30 seconds in that minute so far.

function clockHandAngles(seconds) {}

//  Is Prime: Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.

const isPrime = (int) => {
    if (int <= 1) {
        return false;
    }
    for (let i = 2; i < int; i++) {
        if (int % i === 0) {
            return false;
        }
    }
    return true;
};
console.log(isPrime(7));
console.log(isPrime(8));
// 7 => 2, 3, 4, 5, 6

//  Rockin’ the Dojo Sweatshirt Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts – maybe even more than one. Let’s say they cost $20 (including tax), but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you buy three, or a sweet 35% discount if you buy four or more. He only accepts cash and says he doesn’t have coins, so you should round up to the nearest dollar. Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns the cost.

const sweatshirtPricing = (numOfTShirt) => {
    const cost = 20;
    if (numOfTShirt < 1) {
        return "Invalid sweatshirt number";
    } else if (numOfTShirt === 1) {
        return cost;
    } else if (numOfTShirt === 2) {
        return Math.round(cost - cost * 0.09) * numOfTShirt; // 20 - 1.8 = 18.2 cost * numOfTShirts
    } else if (numOfTShirt === 3) {
        return Math.round(cost - cost * 0.19) * numOfTShirt; // 20 -3.8 = 16.2
    } else {
        return Math.round(cost - cost * 0.35) * numOfTShirt;
    }
};

console.log(sweatshirtPricing(5));
