/**
 * Created by lee on 9/27/17.
 */

/**
 * @param {str}
 * @returns {string}
 */





function solution(str) {
    if(str == null || str.length == 0) return "";

    var record = {};
    var min = str.length;
    var out = "";

    for(var i = 0; i < str.length; i++) {
        if(record.hasOwnProperty(str[i])){
            record[str[i]]++;
            if(min > record[str[i]]) {
                min = record[str[i]];
            }
        } else {
            record[str[i]] = 1;
        }
    }

    // for(e in record) {
    //     if(min > record[e]) {
    //         min = record[e];
    //     }
    // }
    console.log(record);
    console.log(min);


    for(var i = 0 ; i < str.length; i++) {
        if(record[str[i]] > min) {
            out += str[i];
        }
    }

    return out

}


var a = "abcabc";
console.log(solution(a));