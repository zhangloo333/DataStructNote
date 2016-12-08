/**
 * Created by leizha on 12/7/16.
 * input string and target string
 * out: 返回一个最短长度 包含 target string 的子序列
 * return 一个substring 包含所有的 characater
 *
 * 快慢指针问题：
 *      什么时候移动快指针；
 *      什么时候移动慢指针；
 *
 * 1. move end pointer
 *      to find a match
 * 2. if match move the start pointer
 *      update global min
 *      remove a match
 *
 * counter: 来实现。 如果在里面就--， 不再里面了就++
 *
 */

function minWindow(ss,t) {
    if(ss == null || t == null || ss.length == 0 || t.length == 0 || t.length > ss.length) {
        return [];
    }

    var counter = t.length;
    var left = 0;
    var right = 0;
    var minLen = Number.MAX_VALUE;
    var startIndex = -1;

    var myMap = new Map();

    // put all characters of t into map
    for(var i = 0; i < t.length; i++){

        var freq = myMap.get(t[i]);

        if(freq == undefined){
            myMap.set(t[i],1);
        } else {
            myMap.set(t[i],freq+1);
        }

        console.log(myMap);
    }
    // find the match in map

    while(right < ss.length){
        var freq = myMap.get(ss[right]);

        if(freq != undefined) {
            myMap.set(ss[right],freq -1);
            if(freq > 0){
                counter--;
            }
        }

        right++;

        while(counter == 0){

            if(right-left < minLen){
                minLen = right -left;
                startIndex = left;
            }
            var exist = myMap.get(ss[left]);

            if(exist != undefined) {
                myMap.set(ss[left],exist + 1);

                if(exist == 0){
                    counter++
                }
            }
            left++;
        }

    }
    console.log(startIndex+"asdads"+minLen);
    return minLen == Number.MAX_VALUE ? []: ss.substr(startIndex,minLen);

}

var sstring = "bxcdebbdc";
var target = "";

//

console.log(minWindow(sstring,target));
