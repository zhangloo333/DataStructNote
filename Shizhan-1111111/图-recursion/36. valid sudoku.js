/**
 * Created by leizha on 3/6/17.
input 可能的形式：
 [".87654321","2........","3........","4........","5........","6........","7........","8........","9........"]

 首先了解题意：
    给出一个matrix 9*9 里面有数，要辨别 这些数存在的是否合法；

 辨别的规则：
    数独的基本规则是同一行，
    同一列以及
    同一个 3x3 的块不能有重复的数字。

 不需要检查数独是否是可解的。只需要判断已填充的部分是否是合法的。

 解法相当简单，只需要根据规则分别进行判断
    判断每行，row
    判断每列，col
    以及每块是否有重复的数字即可。small matrix
 */

var isValidSudoku = function(board) {
    // var box = new Array(9).fill([]); //用这个就会出现问题
    // console.log(box);

    var box = [[],[],[],[],[],[],[],[],[]]; //写程序中尽量用本方法；
    // console.log(box2);
    for(var i = 0; i < 9; i++) {

        var cRow = [];

        //判断 row
        if(!validRepeat(board[i])) {
            console.log("row");
            return false;
        }



        for(var j = 0; j < 9; j++) {
            //收集一个colom的数
            cRow.push(board[j][i]);// 为什么示反这的 [i][j]这样的话我没每次只能抓一行的没有意义

            //fill box; 算出他是那个盒子的然后把它加进去
            // var boxID = 3*parseInt(i/3) + parseInt(j/3);
            // box[boxID].push(board[i][j]);
            var boxId = 3*parseInt(i/3) +parseInt(j/3);
            console.log("boxID= "+ boxId + " box=" + box);
            box[boxId].push(board[i][j]);
        }


        if(!validRepeat(cRow)){
            console.log("row");
            return false;
        }
        console.log("cRow= " + cRow);


    }

    console.log("box= " + box);

    for(var k =0; k < 9; k++) {
        if(!validRepeat(box[k])){
            return false;
        }
    }


    return true;

}

//判断一个数组是否有重复的实现的方法有很多。这里为什么不能用size，是因为有点的存在
function validRepeat(array) {
    var map = [];

    for(var i =0; i<9; i++) {
        if(array[i] == "."){
            continue;
        } else if(map.indexOf(array[i]) != -1) {
            return false;
        }else {
            map.push(array[i]);
        }
    }
    return true;
}

var ss =[".87654321","2........","3........","4........","5........","6........","7........","8........","9........"];
var ss1 =["....5..1.",".4.3.....",".....3..1","8......2.","..2.7....",".15......",".....2...",".2.9.....","..4......"]
console.log(isValidSudoku(ss1));
var ss = "2........";
console.log(validRepeat(ss));


