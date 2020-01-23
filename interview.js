var trailingZeroes = function (n) {
    
    let count = 0;
    for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
    }
    return count;
};
//console.log('trailingZeroes: ', trailingZeroes(8));
let arr = [1, 5, 6, 1, 0, 1];
const findSumPairs = (arr, value) => {
    let sumsLookup = {};
    let output = [];

    for (let i = 0; i < arr.length; i++) {
        let targetVal = value - arr[i];

        if (sumsLookup[targetVal]) {
            output.push([arr[i], targetVal]);
        }

        sumsLookup[arr[i]] = true;
        
    }
    console.log('sumsLookup: ', sumsLookup);
    return output;
}
function enforcePhoneNumberPattern(string) {
    
    let newString = string.match(/[0-9]{0,14}/g);

    if (newString === null) {
        return '';
    }

    // Join parts returned from RegEx match
    newString = newString.join('');

    // Start number with "+"
    newString = '+' + newString;

    // Limit length to 15 characters
    newString = newString.substring(0, 15);

    return newString;
}
console.log('enforcePhoneNumberPattern: ', enforcePhoneNumberPattern('102'));
