/**
 * Created by lee on 10/17/17.
 */
//怎么写一个repeat的函数

String.prototype.repeatify = function(numTimes) {
    var strArray = "";
    for (var i = 0; i < numTimes; i++) {
        strArray += this;
    }
    return strArray;
};
console.log('hello'.repeatify(6));


String.prototype.repeatify = function (num) {
    var strArr = [];
    for(var i = 0; i < num; i++) {
        strArr.push(this);
    }
    return strArr;
}

console.log('hello'.repeatify(3));