module.exports = function toReadable (number) {
let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];

let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
    'ninety'];

let numString = number.toString();

if (number < 0) throw new Error('Error! The number has a negative value');

if (number === 0) return 'zero';

if (number < 20) {
return ones[number];
}   


if (numString.length === 2) {
return (tens[numString[0]] + ' ' + ones[numString[1]]).trim();
}

//>=100
if (numString.length == 3) {
if (numString[1] === '0' && numString[2] === '0')
return (ones[numString[0]] + ' hundred').trim();
else 
return ones[numString[0]] + ' hundred ' + toReadable(+(numString[1] + numString[2])).trim();
}

}   
  

