/**
 * Created by lee on 3/9/17.
 一个数组里，只有一个数出现过 1 次，其他都出现过 3词，找出那个出现过一次的数字

 最简单的是牺牲空间： 用map作答
 new Map()这个object的里面是不能够 ++ 和 -- 的只能用 reset
 {} key都是 string，如果要输出是 integer的话需要用

 */


var singleNumber = function(nums) {

    var mymap = {};

    for(var i of nums) {
        if(!mymap[i]){
            mymap[i] = 1;
        } else {
            mymap[i]++;
        }
    }

    for(var j in mymap) {
        if(mymap[j] == 1) {
            return j;
        }
    }

};


