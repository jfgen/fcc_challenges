
function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var reg = /[A-Z]/g;

    str = str.trim();

    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === ' ' || str.charAt(i) === '_') {
            str = str.replace(str.charAt(i), '-');
        }
    }

    function upperToHyphenLower(match, offset) {
        if (offset > 0 && str.charAt(offset -1) !== '-') {
            //console.log('-' + match.toLowerCase())
            
            return '-' + match.toLowerCase();
        }

        return match.toLowerCase();
    }


   console.log(str.replace(reg, upperToHyphenLower))
    return str.replace(reg, upperToHyphenLower);
}

spinalCase('AllThe-small Things');
