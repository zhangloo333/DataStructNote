/**
 * Created by lee on 8/30/17.
 */


function wordSearch(board,word) {
    var m = board.length;
    var n = board[0].length;

    // var visted = new Array(m).fill(new Array(n).fill(false));
    // var visted = [
    //     [ false, false, false, false ],
    //     [ false, false, false, false ],
    //     [ false, false, false, false ] ];

    var visted = Array(m).fill().map(function () {
            return Array(n).fill(false);
        });

    console.log(visted);


    var moveCor = [[-1,0],[0,1],[1,0],[0,-1]];

    console.log(moveCor,visted);

    function inArea(x,y) {
        return x>=0 && x < m && y >=0 && y< n;

    }

    function searchWord(bo,w,index,startx,starty) {
        // if(bo == undefined || w == undefined || bo[startx] == undefined) return false;

        if(index == w.length-1 ) {
            return bo[startx][starty] == w[index];
        }

        if(bo[startx][starty] == w[index]) {
            visted[startx][starty] = true;
            // console.log('startx', startx, 'starty',starty);

            // console.log('visited',visted);

            for(var i = 0; i < 4; i++) {
                var newx = startx + moveCor[i][0];
                var newy = starty + moveCor[i][1];

                // console.log('newx*',newx,'newy*',newy,'index',index);

                if(inArea(newx,newy) && !visted[newx][newy]) {
                    // console.log('newx',newx,'newy',newy,'enter-recursion**********', index+1);
                    if(searchWord(bo,w,index+1,newx,newy)){
                        // console.log('out-recursion');
                        return true;
                    }
                }
            }
            // console.log("out-recursion",index);
            visted[startx][starty] = false;
        }

        return false;

    }


    for(var i = 0; i < board.length; i++) {
        for(var j = 0; j < board[i].length; j++){
            if(searchWord(board,word,0,i,j)) {
                return true;
            }
        }
    }
    return false;
}

var test = [['A','B','C','E'], ['S','F','C','S'], ['A','D','E','E'] ];
var target = ["ABCCED","SEE" ,"ABCB"];

console.log(wordSearch(test,target[1]));

