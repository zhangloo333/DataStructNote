/**
 * Created by lee on 9/27/17.
 */

var maxSpeed = {
    car: 300,
    bike: 60,
    motorbike: 200,
    airplane: 1000,
    helicopter: 400,
    rocket: 8 * 60 * 60
};

//比较简便的方法

var ObjectSortByValue1 = function (obj){
    KeySorted = Object.keys(obj).sort(function (a,b) {
        return obj[a] - obj[b];
    })

    var out = {};
    KeySorted.forEach(function (e) {
       out[e] = obj[e]
    })

    return out;
}


// 比较笨的方法
var objectSortByValue = function (obj) {
    var sortable = [];
    var out = {};
    for(e in obj) {
        sortable.push([e,obj[e]]);
    }
    sortable.sort(function (a,b) {
        return a[1] - b[1];
    })

    for(var i = 0; i < sortable.length; i++) {
        var key = sortable[i][0];
        var value = sortable[i][1];
        out[key] = value;

    }

    return out;
}


// Object sort by key

var ObjectSortByKey = function (obj) {
    var keySort = Object.keys(obj).sort();
    var out = {};
    keySort.forEach(function (e) {
        out[e] = obj[e];
    })
    return out;
}

console.log(objectSortByValue(maxSpeed));
console.log(ObjectSortByValue1(maxSpeed));

console.log(ObjectSortByKey(maxSpeed));