/**
 * Created by leizha on 3/8/17.
 */

var isValidSudoku = function(board) { // 判斷九宮格內是否有重複數字用
    var boxs = [[], [], [], [], [], [], [], [], []];
    for (var i = 0; i < 9; i++) {
        // 判斷column是否有重複數字用
        var cRow = [];

        // 直接將row丟進去判斷是否有重複
        if (!validRepeat(board[i])) {
            return false;
        }

        for (var j = 0; j < 9; j++) {
            cRow.push(board[j][i]);   // board[j = 0~8][i = 0] => 等於把第一個columns的值一個一個抓出來

            // 根據i,j判斷目前位子是屬於哪個九宮格， boxId = 3*(i/3取整數) + (j/3取整數)
            var boxId = 3 * parseInt(i / 3) + parseInt(j / 3);
            boxs[boxId].push(board[i][j]);
        }

        console.log("cRow= " + cRow);

        if (!validRepeat(cRow)) {
            return false;
        }
    }
console.log("box= " + boxs);

// 判斷九宮格內是否有重複的值
    for (var k = 0; k < 9; k++) {
        if (!validRepeat(boxs[k])) {
            return false;
        }
    }


    return true;

// 使用一個
    function validRepeat(array) {
        var map = [];
        for (var i = 0; i < 9; i++) {
            if (array[i] == ".") continue;
            if (map.indexOf(array[i]) == -1) {
                map.push(array[i]);
            } else {
                return false;
            }
        }
        return true;
    }
}

var data = ["....5..1.",".4.3.....",".....3..1","8......2.","..2.7....",".15......",".....2...",".2.9.....","..4......"];
console.log(isValidSudoku(data));