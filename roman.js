
var romans = [
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
    ['M']
];

function convertToRoman(num) {

    //Converting to string and then an Array so I can iterate through it
    var arrayNum = num
    .toString()
    .split('')
    .reverse();

    return writeNumber(arrayNum);
}


function writeNumber(number) {
    var newArray = [];

    number.map(function(item, index) {
        if(index<3) {
            newArray.push(romans[index][item - 1]);
        }

        //If there's more than 1 thousand
        if(number.length >= 4 && index === number.length-1 ) {
            for(var i = 1; i <= item; i++) {
                newArray.push(romans[3][0]);
            }
        }
    }); 
    console.log(newArray.reverse().join(''))
    return newArray.reverse().join('');
}

convertToRoman(300006);
