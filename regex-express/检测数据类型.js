/**
 * 1 typeOf 用来检测数据类型的运算符
 * 2 instanceof 检测一个实例是否属于某一个类
 * 3 constructor 构造函数
 * 4 object 浏览器内置类，所有数据类型的基类， 函数的数据类， 所有的类都是function类型的，所有都自带prototyp的
 * 5 isPrototypeof检查是不是原型链上的一些函数。
 *
 * typeOf 检测的数据类型： number, string, boolean, undefined, function object, typeOf 返回的是一个字符串
 *  局限性：
 *  不能具体的细分是 数组 还是 正则，还是对象中其他的值， 因为使用typeof 检测数据类型，对于对象数据类型中的左右的值，最后返回的结果都是“object”
 *
 */

console.log('log', typeof function() {});

//typeof 返回的是字符串
function fn(num1, num2) {
  //typeof 返回的都是string类型的。
  if (typeof num2 === 'undefined') {
    num2 = 0;
  }
  num2 = num2 || 0; //有弊端，不管num2如果传入的是fasle 都会生成的是0的。
}

//instanceof 检测某一个实例是否属于某个类, 来弥补typeOf 的不同
var obj = [12, 23];
console.log(obj instanceof Array);

//自变量常见出来的类型 和 构造函数创建出来的类型有区别的。
console.log(1 instanceof Number);

//局限性：不能用instanceof 来检测用自变量 创造出来的基本类型的值；

//instanceof 的特性： 只要是在当前实例的原型链上，我们用其检测出来的结果豆薯 true
