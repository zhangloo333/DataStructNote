/**
 * Created by lee on 8/30/17.
 */


function add(num) {

    if(num == 0){
        return num;
    }

    return num+add(--num);
}

// console.log(add(100));

function loop(num) {

    function generate(num1) {
        if(num1 == 20){
            console.log('finish');
            return;
        }
        generate(++num1);
        console.log(num1);
        return;
    }
    generate(num);
}

// loop(0);

function findCross(arr1,arr2) {
    if(arr1 == undefined || arr2 == undefined) {
        return null;
    }

    var set = new Set(arr1);

    for(var i = 0 ; i < arr2.length; i++) {
        if(set.has(arr2[i])){
            return arr2[i];
        }
    }
    return null;
}

var t1 = [1,2,3,4,5], t2 = [7,9,4,76,2];

console.log(findCross(t1,t2));


function findBrack() {

}