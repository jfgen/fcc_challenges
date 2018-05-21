
function sumPrimes(num) {

    var numbers = [];

    for (var i = 2; i <= num; i++) {
        numbers.push(i);
    }


    numbers = numbers.filter(function (number) {
        return isPrime(number);
    });

    num = numbers.reduce(function (accumulator, current) {
        return accumulator += current;
    });

    return num;
}

function isPrime(number) {
    var prime = true;

    for (var i = 2; i <= number; i++) {
        if (number % i === 0 && number !== i) {
            prime = false;
        }
    }
    return prime;
}

sumPrimes(10);
