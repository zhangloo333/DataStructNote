/**
 * Created by leizha on 3/9/17.
 题意是：
 两个 string的 patten是一致的。
 string1的元素如果替换成string2的元素，他们的结构是一样的就行
 For example,
 Given "egg", "add", return true.
 Given "foo", "bar", return false.
 Given "paper", "title", return true.
 */

var isIsomorphic = function(s, t) {
    // 使用map來記錄s,t的對應關係
    var mapS = {};
    var mapT = {};

    for(var i in s){
        var valueS = s[i];
        var valueT = t[i];

        // 如果這個字元還沒出現過，加到mapS中
        if(!mapS[valueS]){
            mapS[valueS] = valueT;
        } else if(mapS[valueS] != valueT) {
            // 如果s字元出現過，比對t的字元使否與mapS中儲存的一樣
            return false;
        }

        if(!mapT[valueT]){
            mapT[valueT] = valueS;
        } else if(mapT[valueT] != valueS) {
            return false;
        }
    }
    // 全部比對成功
    return true;
};
//用map的方法来做；
var isIsomorphic = function(s, t) {

    var maps = new Map();
    var mapt = new Map();
    var values, valuet;

    for(var i = 0; i < s.length; i++) {

        values = s[i];
        valuet = t[i];

        parseInt()
        if(!maps.has(values)) {
            maps.set(values,valuet);
        }else if(maps.get(values) != valuet){
            return false;
        }

        if(!mapt.has(valuet)) {
            mapt.set(valuet,values);
        }else if(maps.get(valuet) != values){
            return false;
        }
    }

    return true;
}



var s="foo",t ="bar";

console.log(isIsomorphic(s,t))