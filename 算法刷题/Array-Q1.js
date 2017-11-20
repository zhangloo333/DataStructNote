/**
 * Created by leizha on 1/19/17.
 * 给你个字符串用， 用数组代表重复的数。
 * / "aabbcc" => 2a2b2c
 // "aabbaa" => 2a2b2a
 // "abcd" => 1a1b1c1d
 // "aaaa" => 4a

 问题分析：
 1 target： 输出一个string能直到这里面有多少个重复的数。
 2 input: string
 3 output: string

 4 coner case: 如果不能 空或者是非字母 的表现

 5 用到的数据结构：map

 6 time complexity: for string 长度
    map traverse 所有的 map member 来更新输出的str

    用到的map 有 new Map()
    map.has(key) => return true/false
    map.set(key,value)
    map.get(value)

 */

/*
* 逐步counter加法：
注意counter是从counter = 1 开始的不是从0开始的。
注意最后一个采集补上所以 i <= str.length;
*/

function findRepeat(str) {

    if(str.length == 0){
        return [];
    }
    var counter = 1;
    var out="";
    for(var i = 1; i <= str.length; i++){
        if(str[i] !== str[i-1]){
            out += counter + str[i-1];
            counter = 1;
        }else {
            counter++
        }
    }
    return out;
}

// 统计法：用一个hashmap来统计他们出现的个数，然后再for loop 循环输出 他们
 function findRepeat(str) {

     if(str.length == 0){
         return [];
     }
     var storage = {};
     var out="";

     for(var i = 0; i < str.length; i++){
         storage[str[i]] = storage[str[i]]+1 || 1;
     }

     for(var e in storage) {
         out += storage[e]+e;
     }

     return out;
 }

 var sampe = "aabbbccd";
 var out = findRepeat(sampe);
 console.log(out);
