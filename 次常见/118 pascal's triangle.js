/**
 * Created by leizha on 3/6/17.
 Given numRows, generate the first numRows of Pascal's triangle.
 For example, given numRows = 5,
 [
 [1],
 [1,1],
 [1,2,1],
 [1,3,3,1],
 [1,4,6,4,1]
 ]
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var res = [[1]];

    while(res.length < numRows){
        var eleArray = [1];
        var ptr2 = res[res.length-1].length - 1;// index
        for(var i = 1; i < res[res.length-1].length; i++){
            eleArray[i] = res[res.length-1][i] + res[res.length-1][i-1];
        }
        eleArray.push(1);
        res.push(eleArray);
    }
    // console.log(res);
    return res;
};


generate(5)