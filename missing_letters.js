
function fearNotLetter(str) {
    var solution = undefined;

    // Iterate through the given string
    for (var char = 0; char < str.length; char++) {
        var current = str.charCodeAt(char);

        if ((str.charCodeAt(char +1 )) - current > 1) {
            solution += String.fromCharCode(current +1);
        }
    }

    return solution;
}


fearNotLetter("abcdefghjklmno");
