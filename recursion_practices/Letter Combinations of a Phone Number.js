/**
 * Created by lee on 8/28/17.
 *
 *  给出一个键盘上的字，给出一个 数字型的字符串，输出可能的所有 代表的字母型字符串；
 *  给出

 Input:Digit string "23"
 Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]

 */


var letterCombinations = function(digits) {
    var letterMap = [
        " ",
        "",
        "abc",
        "def",
        "ghi",
        "jkl",
        "mno",
        "pqrs",
        "tuv",
        "wxyz"
    ]
    var output = [];

    function findCombination(digi,index,s) {
        if(index == digi.length){
            output.push(s);
            return;
        }

        var c = digi[index];
        var letters = letterMap[c-'0'];
        for(var i = 0; i < letters.length;i++) {
            findCombination(digi,index+1,s+letters[i]);
        }
    }

    if(!digits) return output;
    findCombination(digits,0,'');
    return output;

}

console.log(letterCombinations("23"));