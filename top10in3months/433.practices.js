/**
 * Created by leizha on 2/7/17.
 */


function minMutation(start, end, bank) {
    if(start == end){
        return 0;
    }

    var bankSet = new Set(bank);

    var charSet = ['A','C','G','T'];

    var level = 0;
    var visited = new Set();
    var queue = [];
    queue.unshift(start);
    visited.add(start);


    while(!(queue.length == 0)){
        var size = queue.length;
        while(size-- > 0) {
            var curr = queue.shift();
            if(curr == end){
                return level;
            }

            var currArray = curr.split("");
            // console.log(currArray);
            for(var i = 0; i < currArray.length; i++) {
                var old = currArray[i];
                charSet.map(function (c) {
                    currArray[i] = c;
                    var next = currArray.join("");
                    // console.log(next);
                    if(!visited.has(next) && bankSet.has(next)){
                        visited.add(next);
                        queue.push(next); //这里不能用unshit，必须用push，向里面添加容器添加元素。r
                    }
                });

                currArray[i] = old;
            }
        }
        level++;
    }
    return -1;

}

var start = "AAAACCCC";
var end = "CCCCCCCC";
var bank = ["AAAACCCA","AAACCCCA","AACCCCCA","AACCCCCC","ACCCCCCC","CCCCCCCC","AAACCCCC","AACCCCCC"];

console.log(minMutation(start,end,bank));