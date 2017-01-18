/**
 * Created by lee on 11/6/16.
 */
/**
 * javascript 中只支持1D的数组, 多维的数组--可以通过数组里的元素又是数组来表示。
 * 方法1：
 *  先建立一个数组matrix[]
 *  在规定有多少行row
 *  在用for循环行数  matrix[i] = []
 *
 * 方法2：建立一个初始化的数组：
 *  在array中添加一个matrix的function
 *  这个方程的初始化值 是 numrows numcols，initial
 *  先建立个matrix
 *  外层循环是row，最后把clolum的值赋给第一层row
 *  内层循环给colos赋值
 *
 *  javascript 中支持不规则的数组:
 *  很多编程语言在处理这中参差不齐的数组都表现不好，但是javascript 缺表现不错
 *
 * */

//方法一:
    function BuildMatrix(matrix, rows){
        for(var i= 0; i < rows; i++){
            matrix[i]=[]
        }
        return matrix;
     }

var matrix = BuildMatrix([],6);
console.log(matrix);
matrix[0][0]=1;
console.log(matrix);

//方法二:
Array.matrix = function(rows, cols, initial){
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

console.log(Array.matrix(2,3,1));

/** 2D 数组的长度 row 和 cols and totel number
 * matrix.length = rows number
 * matrix[matrix.length].length = cols
 */
var matrix = Array.matrix(2,3,1);
console.log(matrix);
var lengthM = Array.matrix(2,3,1).length;
console.log(lengthM);
var column = matrix[0].length;
console.log(column);


//怎么在2D array的里面找到 最小值 和 最大值。

var abc = [[1,4],[5,6],[2,6],[10,3],[7,19]];
var cc = abc.map(function (e) {
    return e[0];
})

console.log(cc);

var abcd = [1,4,5,6,2,6,10,3,7,19];

var dd = abcd.map(function (e) {
    return e*2;

}) // map就是for loop

console.log(dd);
console.log(abcd);