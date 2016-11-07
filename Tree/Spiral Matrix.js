/**
 * Created by lee on 11/6/16.
 */
/**
 * 1. input: 一个二维的matrix 数组;
 *  input 2: 一个matrix, row, column,output-array/linklist, offset
 * 2. output: 一个array/linklist.
 * 3. 首先判断base case.
 *     3.1 当输入一个不存在的matrix的情况
 *     3.2 当input一个一行的matrix的情况
 *     3.3 当input一个一列的matrix的情况
 * 4. 循环: 找到一个起始点start point(0,0);
 *     4.1 upper: from start point(offset, offset)- loop (i = offset; i < col-1-offset; i++
 *     4.2 right: from right side - loop(i=offet; i< row-1 -offset; i++)
 *     4.3 bottom: from the right bottom = loop (i= col-1 + offset; i> offset; i--)
 *     4.4 left: from the left bottom to upper = loop( i = row-1+offset; i>offset; i--);
 * 5. 重新recursion 3-4 整体程序的步骤
 * */

function helper(matrix, row, col,offset, array){
    if(row == 0 || col == 0) {
        return null;
    }
    if(row == 0){
        for(var i = 0; i < col-1; i++){
            array.push(matrix[0][i]);
        }
        return; // return 可以什么都不用带的
    }
    if(col == 0){
        for(var i = 0; i < row-1; i++){
            array.push(matrix[i][0]);
        }
        return; // return 可以什么都不用带的
    }

    // 1. up row
    for(var i = offset; i < col-1+offset; i++){
        array.push(matrix[offset][i]);
    }

    //2. right col
    for(var i = offset; i < row -1 + offset; i++){
        array.push(matrix[i][col-1+offset]);
    }

    //3. down row
    for(var i = col-1+offset; i>offset; i--){
        array.push(matrix[row-1 + offset][i]);
    }

    //4. left col
    for(var i = row-1+offset; i>offset;i--){
        array.push(matrix[i][offset]);
    }

    helper(matrix,row-2,col-2,offset+1,array);

}

function SpiralOrder(matrix){
    var res = [];
    if(matrix == null || matrix.length == 0){
        return res;
    }
    if(matrix[0] == null || matrix[0].length == 0){
        return res;
    }

    var row = matrix.length;
    var col = matrix[0].length;
    helper(matrix,row,col,0,res);
    return res;
}

// 建立一个矩阵;
function BuildMatrix(matrix, rows){
    for(var i= 0; i < rows; i++){
        matrix[i]=[]
    }
    return matrix;
}

var matrix = BuildMatrix([],4);
console.log(matrix);
var intial = 0;
for(var i = 0; i < 4; i++){
    for(var j=0; j < 3; j++) {
        matrix[i][j] = intial;
        intial++;
    }
}
console.log(matrix);
var output = SpiralOrder(matrix);
console.log(output);
