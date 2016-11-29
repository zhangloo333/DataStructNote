/**
 * Created by leizha on 11/28/16.
 */
/**
 * Created by leizha on 11/28/16.
 * matrix - 给一个matrix， 有两个特性： 每一行都是单调递增的。每一列都是单调递增的；
 * 给出一个数，如果找到了就返回 true 否则就返回 false
 * input: 2D array
 * out: false/true
 * conner case: null/empty --- output false
 *
 * binary search 的核心是什么： 就是能最大限度的丢掉一半来减少范围；
 *
 * 解题思路1：
 * 怎么缩小一个matrix。怎么取matrix的 submatrix。
 * 决定一个matrix的大小， 只要取 他的 start point 和 end point， 从他的start point 必须是递增的到 end point
 *
 * 用recursion来做。 不断的把一个大的matrix分割成小的matrix，看有没有，所有的小matrix 都没有(逻辑与)
 *
 * 某数组的一半 mid = （start + end）／2 这里的mid 不是 数字上matrix元素的一半。 这里的mid应该是matrix的中心（center：连对角线对着的中心）通过找到 center
 * 来决定抛弃哪一半.
 *
 * Center.X = (Start.x + end.x) /2
 * Center.Y = (start.y + end. y) /2
 *
 * 此题的精妙之处在于： 并没有 遍历 matrix里面的任何一个数，就是 而是不断的 缩小范围来访问。
 *
 * 解题思路2：
 * 如果能延着单一方向一只走下去。就是选取某个点时候，通过比较target的大小能够 选取单一的方向进行前进。
 *
 */

// search matrix II

function searchMatrix(matrix, target) {

    // corner case checked
    var M = matrix.length;
    var N = matrix[0].length;

    return binarySearch(matrix, target, 0, 0, M-1, N-1);

}

function binarySearch(matrix, target, startX, startY, endX, endY) {
    if(startX > endX || startY > endY) {
        return false;
    }

    var centerX = Math.trunc(startX + (endX - startX)/2);
    var centerY = Math.trunc(startY + (endY - startY)/2);

    console.log("(starx,stary) = ("+ startX +","+startY+"), (endx,endy)= ("+endX+","+endY+") (centerX,centerY) = (" +centerX +","+ centerY+")" )

    if(matrix[centerX][centerY] == target){
        //case1 : found
        return true;
    } else if (matrix[centerX][centerY] > target){
       return binarySearch(matrix,target,startX,startY,endX,centerY-1) || binarySearch(matrix, target, startX,centerY,centerX-1,endY);
    }else{
        return binarySearch(matrix,target,startX,centerY+1,endX,endY) || binarySearch(matrix,target,centerX+1,startY,endX,centerY);
    }
}



// method 2: 从最优点出发
function searchMatrix2(matrix, target) {
    // corner case
    if(matrix == null){
        return false;
    } else {
        var row = matrix.length;
        var col = matrix[0].length;
        var curx = 0;
        var cury = col-1;
        while(curx < row && cury >= 0){
            console.log("matrixpoint="+ matrix[curx][cury]);
            if(matrix[curx][cury] > target){
                cury--;
            } else if(matrix[curx][cury] < target){
                curx++;
            }else {
                return true;
            }
        }

        return false;

    }
}






// build testing matrix
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
var mn = cc.matrix(3,5,2);
mn[0][0] = 0;
mn[0][1] = 2;
mn[0][2] = 5;
mn[0][3] = 9;
mn[0][4] = 10;

mn[1][0] = 1;
mn[1][1] = 4;
mn[1][2] = 6;
mn[1][3] = 11;
mn[1][4] = 12;

mn[2][0] = 3;
mn[2][1] = 7;
mn[2][2] = 8;
mn[2][3] = 16;
mn[2][4] = 15;

console.log(mn);
console.log(searchMatrix(mn,4));
console.log(searchMatrix2(mn,3));