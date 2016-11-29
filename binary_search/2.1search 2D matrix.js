/**
 * Created by leizha on 11/28/16.
 * matrix - 给一个matrix， 有两个特性： 每一行都是单调递增的。每一行的第一个元素都比上一行的数小
 * 给出一个数，如果找到了就返回 true 否则就返回 false
 * input: 2D array
 * out: false/true
 * conner case: null/empty --- output false
 * 解题思路： 把 matrix 转化成 1D array
 * start = 0；
 * end = M(行） * N（列）- 1；
 * note：
 *  2D -> 1D 的映射关系是关键 （i,j）=> index = i*N(列)+ j
 *  1D -> 2D 映射回来  index => (i,j) = i = index/n ; j = index%n
 * mid 怎么转换成 矩阵中的数  [i][j] = [mid/N][mid%N] because i*N + j  = mid
 * 解题的速度是如何 丢弃一半，
 * 基础解题：
 * 把2D的matrix 变成 1D的 然后在丢其一半的查找
 *
 */

function searcheMatrix(matrix,target) {
   //corner case
    if(matrix == null || matrix.length == 0 || matrix[0] == null || matrix[0].length == 0){
        return false;
    }
   //正常的case
    var M = matrix.length;
    var N = matrix[0].length;
    var start = 0;
    var end = M * N -1;

    while (end >= start) {
        var mid = start + (end - start)/2;
        if(matrix[Math.trunc(mid/N)][Math.trunc(mid%N)] == target){
            return true;
        } else if(matrix[Math.trunc(mid/N)][Math.trunc(mid%N)] > target){
            end = mid -1;
        } else {
            start = mid + 1;
        }
    }
    return false;
}

//build 2D matrix;

Array.prototype.matrix = function(rows, cols, initial){
    var array = [];
    for(var i=0; i < rows; i++) {
        var columns = [];
        for(var j=0; j < cols; j++) {
            columns[j] = initial;
        }
        array[i]=columns
    }
    return array;
}

// testing result
var cc = [];
var mn = cc.matrix(3,4,2);
mn[0][0] = 0;
mn[0][1] = 2;
mn[0][2] = 3;
mn[0][3] = 6;
mn[1][0] = 7;
mn[1][1] = 9;
mn[1][2] = 10;
mn[1][3] = 14;
mn[2][0] = 15;
mn[2][1] = 18;
mn[2][2] = 20;
mn[2][3] = 21;

console.log(mn);
console.log(searcheMatrix(mn,89));
