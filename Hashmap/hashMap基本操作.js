/**
 * Created by leizha on 12/1/16.
 */
/**
 * hashmap 优点： 删除 和 取用 数据 非常快
 * 倒是寻找 数据中 最大的比较慢--可以用二叉树来解决
 *
 * hashmap 是基于 array 进行够早的
 *
 * */

//
// var a = [1, 2, 3];
// a.includes(2);

var myset = new Set();

myset.add(1);
myset.add(5);

console.log(myset.has(1));