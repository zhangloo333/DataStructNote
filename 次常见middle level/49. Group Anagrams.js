/**
 * Created by leizha on 3/10/17.

 这一题极其简单： 搞清楚步骤然后把 code写好

 步骤：1 需要一个map (key value) pair
    key 保存 words 被unicode sort好的顺序，
    因为如果word被 sort过后的情况下，他们字符的循序是一致的，
    就把它加入到一个array的里面()；

 最后把 object 按array输出的时候，只需要用object[e]会输出每一个属性的序列

 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var storage = {};
    var res = [];

    for(var e of strs) {
        var sortW = wordSort(e);
            var temp = [];

        if(!storage[sortW]) {
            temp.push(e);
        } else {
            temp = storage[sortW];
            temp.push(e)
        }
        storage[sortW] = temp;
    }

    for(var i in storage) {
        res.push(storage[i]);
    }
    return res;

    // return storage;
};

function wordSort(word) {
    return word.split("").sort().join("");
}





console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));