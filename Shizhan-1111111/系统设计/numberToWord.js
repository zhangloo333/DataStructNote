const LESS_THAN_20 = ["","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"]
const TENS = ["","TEN","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty", "Ninety"];
const THOUSANDS = ["","Thousand","Million","Billion"];


var numberToWords = function (nums) {

    if(nums === 0) return "zero";
    var resWords = "";
    var i = 0;

    while(nums > 0) {
        if(nums%1000 !== 0) {
            resWords = helper(nums%1000) + THOUSANDS[i] + " " + resWords;
        }
        nums = parseInt(nums/1000);
        i++;
    }
    return resWords;
}

var helper = function (num) {
    if(num === 0) {
        return "";
    } else if (num < 20) {
        return LESS_THAN_20[num] + " ";
    } else if(num <100) {
        return TENS[parseInt(num/10)] + " " +helper(num%10);
    } else {
        return LESS_THAN_20[parseInt(num /100)] + " Hundred " + helper(num % 100);
    }
}

console.log(numberToWords(123))

var a = [1,2,3,4,5,6];
console.log(a.slice(1,4));
