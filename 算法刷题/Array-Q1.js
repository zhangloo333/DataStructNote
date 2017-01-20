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



function findRepeat(str) {

    if(str.length == 0){
        return [];
    }

    var arr = str.split("");
    console.log(arr);
    var storage = new Map();
    var out="";

    for(var i = 0; i < arr.length; ++i){
        if(storage.has(arr[i])){
            storage.set(arr[i],storage.get(arr[i])+1); // 这一点错了。主要是把 arr[i]+1 写成了 arr[i+1];
        } else {
            storage.set(arr[i],1);
        }
    }
    console.log(storage);

    function buildStr(value,key,map) {
        out += value+key;
    }

    storage.forEach(buildStr);

    return out;
}

var sampe = "abcdb";
var out = findRepeat(sampe);
console.log(out);