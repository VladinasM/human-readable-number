const names = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

module.exports = function toReadable(number) {
    if (number >= 20 && number < 100) {
        let tens = Math.floor(number / 10) * 10;
        let isZero = (number%10) > 0 ? `${names[tens]} ${names[number % 10]}`: `${names[tens]}`;
        return isZero;
    } else if (number >= 100) {
        let hundreds = Math.floor(number / 100);
        let tens = Math.floor((number % 100) / 10) * 10;
        let units = number % 10;
        if (tens !== 0) {
            let isZero = tens < 20 ? `${names[hundreds]} hundred ${names[number % 100]}`:
                         units > 0 ? `${names[hundreds]} hundred ${names[tens]} ${names[units]}` : `${names[hundreds]} hundred ${names[tens]}`;
            return isZero;
        } else {
            let isZero = units > 0 ? `${names[hundreds]} hundred ${names[units]}`: `${names[hundreds]} hundred`;
            return isZero;
        }
    }
    return `${names[number]}`;
};
