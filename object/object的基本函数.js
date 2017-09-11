/**
 * Created by leizha on 12/1/16.
 */

/**
 * 1. 怎么创建一个object
 * 2. 怎么delete 一个object 的property
 * */

var myObject = {
    price: 20.99,
    get_price : function() {
        return this.price;
    }
};
var customObject = Object.create(myObject);
customObject.price = 19.99;

delete customObject.price;
console.log(customObject.get_price());