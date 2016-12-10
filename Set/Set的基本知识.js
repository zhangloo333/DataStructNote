/**
 * Created by leizha on 12/1/16.
 */
/**
 * js support set data structure
 *  特点：
 *      集合中的成员是无序的
 *      集合中不允许相同成员的存在
 *
 * set的一些属性：
 *  size ：length
 *
 *
 * set 主要的方法：
 *    add:
 *    delete:
 *
 *    clear:
 *
 *    has(value)
 *
 *    forEach(callback-fun)
 *          callback-fun = value, key,set
 *
 * 方法二： 用 array 实现一个 set
 *  先要判定一个nums 是否在 set的里面 先找到 index = array.indexOf(value);  index < 0 不存在， 如果大于0 返回位置。
 *
 * */

// build in js object for set

var ary1 = [1,2,3,4,5,6];
console.log(ary1);
var myset = new Set(ary1);

myset.add('a');

// console.log(myset.clear());
console.log(myset.delete(2));
console.log(myset);


myset.forEach(function (value,key,set) {
    console.log("[value:"+value +", key:"+key+" ]")

});

// 也可以用一个array来实现set的 interface

//add 方法来实现一个add 元素的操作
var dataStroe = [1,2,3,4];
function add(data) {
    if(dataStroe.indexof(data)<0) { // 小于0说明不存在
        dataStroe.push(data);
        return true;
    } else {
        return false;
    }
}

// remove 其实也和add 一样，的先用 indexOf来判断 是否 元素在数组中。如果
function remove(data) {
    var pos = dataStroe.indexOf(data);
    if(pos > -1) {
        dataStroe.splice(pos, 1);
        return true;
    } else {
        return false;
    }

}

//是否法包含这个值
function contain(data) {
    if(dataStroe.indexOf(data)<0){
        return false;
    } else {
        return true;
    }
}

console.log(contain(5));
console.log(contain(2));

/**
 * 判断一个set1 和另一个set2是否有交集
 *  1. 判断一个set里面的元素 是都是在另一里面，
 *  2. 如果在 放入新的一个set里面。然后 最终输出。
 */


var settest = new Set();
settest.add(1);
settest.add(1);
console.log(settest);