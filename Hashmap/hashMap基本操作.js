/**
 * Created by leizha on 12/1/16.
 */
/**
 * hashmap 优点： 删除 和 取用 数据 非常快
 * 倒是寻找 数据中 最大的比较慢--可以用二叉树来解决
 *
 * hashmap 是基于 array 进行够早的
 *
 * JS 有内建的map object
 *  「最早： object 和 maps 是可以通用互换的现在则不可以了
 *   the difference is with object and maps:
 *      object has a prototype as property
 *      object中的key只能是 string 和 symbols， 倒是map中的key可以是任何类型
 *      object 是没有 size的，但是maps 是有size的
 *
 * 确定是否用map 根据一下的内容：
 * key 常常 为 unknow untile run time, do you need to lool them up dynamically?
 * all value have the same type,
 * are key-value pairs often added or removed?
 *
 * note:
 *  key 是被平凡查询的。
 *  value 是被查到 key后的应用
 *
 *
 * map 的基本属性：
 * length: map.length
 *
 * map prototype 的属性：
 *  size： map.size
 *
 *  添加 key-value pair
 *
 *  add: map.set(key, value)
 *  delete: map.delete(key);
 *
 *  获取value
 *
 *  map.get(key) => return value or undefined or none
 *
 *  查询key是否在这个map里面
 *  map.has(key)
 *
 *  clear: map.clear
 *
 *
 *
 *
 * */

//
// var a = [1, 2, 3];
// a.includes(2);

var myset = new Set();

myset.add(1);
myset.add(5);

console.log(myset.has(1));


var myMap = new Map();

var keyString = "a string",
    keyObj = {},
    keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get("a string");   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}


function print(data) {
    console.log(data);
}


print(myMap.get(keyString));
print(myMap.get(keyObj));
print(myMap.get(keyFunc));

print(myMap);

//怎么遍历一个maps

var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");

//node里面不支持。