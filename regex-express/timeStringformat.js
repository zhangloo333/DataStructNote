/**
 * var str = "2015-6-10 14:53:00";
 */

let str = '2018-6-10 14:53:00';
var resStr = '2018年06月10日 14时53分00秒';

//现在年月日是固定的，就是里面的数字是不固定的。我们可以拆成
resStr = '{0}年{1}月{2}日{3}时{4}分{5}秒';
var arra = ['2018', '6', '10', '14', '53', '0'];
//我们把数字每个数替换到指定的区域
var regex = /{(\d+)}/g;

resStr = resStr.replace(regex, function() {
  var num = arguments[1],
    val = arra[num];
  return val < 10 ? '0' + val : val;
});

console.log(resStr);

//把字符串，变成数组。
const yearMonth = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})$/g;
let str = '2018-6-10 14:53:00';
let arr3 = [];
str.replace(yearMonth, function() {
  console.log(arguments);
  ary3 = [...arguments];
  arr3 = ary3.slice(1, 7);
});

resStr = '{0}年{1}月{2}日{3}时{4}分{5}秒';
var arra = ['2018', '6', '10', '14', '53', '0'];
//我们把数字每个数替换到指定的区域
var regex = /{(\d+)}/g;
str = resStr.replace(regex, function() {
  var num = arguments[1],
    val = arr3[num];
  return val.length === 1 ? '0' + val : val;
});

console.log(str);
