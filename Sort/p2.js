/**
 * Created by leizha on 1/18/17.
 */

function quicksort(array) {
    if(array.length <=1){
        return array;
    }
    innerSort(array,0,array.length-1);
    return array;
}

function innerSort(arr, L, R) {
    if(L < R){
        var index = partition(arr,L,R);
        innerSort(arr,L,index-1);
        innerSort(arr,index+1,R);
    }
}

function partition(arr,h,t) {
    var pivort = arr[t];
    var lp = h;
    var rp = t-1;

    while(lp <= rp) {
        if(arr[lp] <= pivort){
            lp++;
        } else {

            //var temp = arr[lp];
            //arr[lp] = arr[rp];
            //arr[rp] = temp;

            swap(arr,lp,rp);
            rp--;
        }
    }

    //var temp = arr[lp];
    //arr[lp] = arr[t];
    //arr[t] = temp;

    swap(arr,lp,t);


    return lp;

}

//把array 也添加进来就可以 用swap 在原位置上更改 array的数了
function swap(arr,i,j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// 怎么产生一个随机的数组
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randArr(min,max,num){
    var arr =[];

    for(var i = 0 ; i < num; i++) {
        arr.push(getRandom(min,max));
    }
    return arr;
}

function unikRarray(min,max,num){
    var storge = new Set();

    while(storge.size <= num){
        storge.add(getRandom(min,max));
    }
    return Array.from(storge);
}


var abc = [3,4,2,5,6,7,8,1,9,3];
var cde = randArr(1,20,10);
var ert = unikRarray(1,20,10);
//console.log(cde);
console.log("this is unique array = " +  ert);

var output = quicksort(abc);
var output2 = quicksort(ert);
console.log(output);
console.log(output2);