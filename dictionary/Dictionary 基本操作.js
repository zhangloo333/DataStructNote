/**
 * Created by lee on 1/29/17.

 dictionary 其实就是建立一个object(有 key-value),但是这个object比较特殊,object是一个array

 array的index可以是任何类型,string,number

 定义一个 dictionary

 定义一个 add(key, value) 的方法. input 有两个参数 : Key, value

 定义一个 find(key)方法, 通过key, 可以找到相应的value.

 定义一个删除操作, delete 是object 的方法,应为js里面除了基本类,里面全是 object的方法.
    remove(key)

 定义一个现实全部的操作, showAll()
 */

// define a dictionary class
function Dictionary() {
    this.dataStore = new Array();
}

// define a add function

Dictionary.prototype.add = function(key, value) {
    this.dataStore[key] = value;
}

// define a find function

Dictionary.prototype.find = function(key) {
    return this.dataStore[key];
}

// define a delete function
Dictionary.prototype.remove = function(key) {
    delete this.dataStore[key];
}

// showAll
Dictionary.prototype.showAll= function(){
    for(var key in this.dataStore){
        console.log(key + "->" + this.dataStore[key]);
    }
}


var dic = new Dictionary();

dic.add("hi",1234);
dic.add("hello",14);
dic.add("ola",15);
dic.showAll();
console.log(dic)