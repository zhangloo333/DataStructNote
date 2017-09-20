/**
 * Created by lee on 9/12/17.
 */


function nQueue(n) {

    var res = [];
    var col = new Array(n).fill(false);
    var dia1 = new Array(2*n-1).fill(false);
    var dia2 = new Array(2*n-1).fill(false);
    var row1 = [];

    function putQueue(n, index, row) {
        /** 处理的是n 皇后的问题，
         * index 是处理的第几行
         * row i = k, 那么就是 摆放在 第 i行的第 k 列；
         * 尝试在 一个n 皇后问题中，摆放 index行的皇后位置；
         **/
        if(index == n) {
            res.push(generateBoard(n,row));
            console.log('res1-11111111111', row1);
            console.log('res',res);
            return;
        }

        for(var i = 0; i < n; i++) {
            // 尝试将 第index 行的皇后摆放在 第 i列
            if(!col[i] && !dia1[index+i] && !dia2[index-i+n-1]) {
                row.push(i);
                col[i] = true;
                dia1[index+i] = true;
                dia2[index-i+n-1] = true;
                console.log('row',row);
                putQueue(n,index+1,row);
                col[i] = false;
                dia1[index+i] = false;
                dia2[index-i+n-1] = false;
                row.pop();
                console.log('row',row);

            }
        }
    }


    function generateBoard(n,row) {
        var board = new Array(n).fill().map(function () {
            return new Array(n).fill('.');
        });
        for(var i = 0; i < n ; i++) {
            board[i][row[i]]  = 'Q';
        }
        return board;
    }

    putQueue(n,0,row1);
    return res;
}

console.log(nQueue(4));