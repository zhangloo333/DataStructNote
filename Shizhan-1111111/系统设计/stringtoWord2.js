var ONE_THOUSAND = Math.pow(10, 3);
var TEN_THOUSAND = Math.pow(10, 4);

function amountToCheck(amount) {
    return numberToWord(Math.floor(amount)) + " and " + amountToChange(amount);
}


function amountToChange(amount) {
    var change = Math.round((amount - Math.floor(amount)) * 100);

    return change + "/100";
}

function numberToWord(integer) {
    var prefix = '';
    var suffix = '';
    if (!integer) { return "zero"; }

    if (integer < 0) {
        prefix = "negative";
        suffix = numberToWord(-1 * integer);
        return prefix + " " + suffix;
    }
    if (integer <= 90) {
        switch (integer) {
            case integer < 0:
                prefix = "negative";
                suffix = numberToWord(-1 * integer);
                return prefix + " " + suffix;
            case 1: return "one";
            case 2: return "two";
            case 3: return "three";
            case 4: return "four";
            case 5: return "five";
            case 6: return "six";
            case 7: return "seven";
            case 8: return "eight";
            case 9: return "nine";
            case 10: return "ten";
            case 11: return "eleven";
            case 12: return "twelve";
            case 13: return "thirteen";
            case 14: return "fourteen";
            case 15: return "fifteen";
            case 16: return "sixteen";
            case 17: return "seventeen";
            case 18: return "eighteen";
            case 19: return "nineteen";
            case 20: return "twenty";
            case 30: return "thirty";
            case 40: return "forty";
            case 50: return "fifty";
            case 60: return "sixty";
            case 70: return "seventy";
            case 80: return "eighty";
            case 90: return "ninety";
            default: break;
        }
    }

    if (integer < 100) {
        prefix = numberToWord(integer - integer % 10);
        suffix = numberToWord(integer % 10);
        return prefix + "-" + suffix;
    }
    if (integer < ONE_THOUSAND) {
        prefix = numberToWord(parseInt(Math.floor(integer / 100), 10)) + " hundred";
        if (integer % 100) { suffix = " " + numberToWord(integer % 100); }
        return prefix + suffix;
    }
    if (integer < TEN_THOUSAND) {
        prefix = numberToWord(parseInt(Math.floor(integer / ONE_THOUSAND), 10)) + " thousand";
        if (integer % ONE_THOUSAND) { suffix = " " + numberToWord(integer % ONE_THOUSAND); }
        return prefix + suffix;
    } else {
        return '';
    }
    return prefix + " " + suffix;
}
