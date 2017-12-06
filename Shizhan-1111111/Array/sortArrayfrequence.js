/**
 * Created by lee on 11/28/17.
 * 找出 array中 字母出现频率 然后进行排序，输出。
 */


function customSort(arr) {
    if(!arr || arr.length == 0) return [];

    var record = {};
    var group = [];
    var frequencySet = new Set();

    for(var i = 0; i < arr.length; i++){
        record[arr[i]] = record[arr[i]]+1 || 1;
    }
    console.log(record);

    for(e in record) {for(var i = 0; i < arr.length; i++){
        record[arr[i]] = record[arr[i]]+1 || 1;
    }
        frequencySet.add(record[e]);
    }
    var sortFreSet = Array.from(frequencySet).sort(function (a,b) {
        return a-b;
    })

    for(e of sortFreSet) {
        var temp = [];
        for(a in record){
            if(e == record[a]){
                for(var i = 0; i < e;i++) {
                    temp.push(a);
                }
            }
        }
        group.push(temp);
    }

    for(var z =0; z<group.length;z++){
        for(var y =0; y < group[z].length;y++){
            console.log(group[z][y]);
        }
    }
}

var e = [3,1,2,2,4];
var e2 = [8,5,5,5,5,1,1,1,4,4]
console.log(customSort(e));