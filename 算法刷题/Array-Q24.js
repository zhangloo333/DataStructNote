/**
 * Created by lee on 1/10/17.
 *
 *  find union and intersection
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

function findUnitS(array1, array2){
    if(array1 == null && array2 ==null && array1.length == 0 && array1.length ==0) {
        console.log("union = null and intersection = null");
    }

    var l1 = array1.length;
    var l2 = array2.length;
    var l = Math.max(l1,l2);
    var union =[]
    var intersection =[];

    if(l1 == 0){
        console.log("union = " + array1 + "intersection = " + array1);
        return;
    }

    if(l2 == 0) {
        console.log("union = " + array2 + "intersection = " + array2);
        return;
    }

    for(var i = 0; i < l; i ++) {
        if(i<l1){
            if(union.indexOf(array1[i]) == -1){
                union.push(array1[i]);
            }
            else{
                intersection.push(array1[i]);
            }
        }

        if(i<l2){
            if(union.indexOf(array2[i]) == -1){
                union.push(array2[i]);
            } else {
                intersection.push(array2[i]);

            }
        }
    }
    console.log("union" + union + "intersection" + intersection);
    return;
}

//以上程序有个缺点不能数组里面不能有重复的数

function findUnitS2(array1, array2) {
    if (array1 == null && array2 == null && array1.length == 0 && array1.length == 0) {
        console.log("union = null and intersection = null");
    }

    var l1 = array1.length;
    var l2 = array2.length;
    var l = Math.max(l1, l2);
    var union = new Set();
    var intersection = new Set();

    if (l1 == 0) {
        console.log("union = " + array1 + "intersection = " + array1);
        return;
    }

    if (l2 == 0) {
        console.log("union = " + array2 + "intersection = " + array2);
        return;
    }

    for(var i = 0; i < l; i ++) {
        if(i<l1){
            if(union.has(array1[i])){
                intersection.add(array1[i]);
            }
                union.add(array1[i]);

        }

        if(i<l2){
            if(union.has(array2[i])){
                intersection.add(array2[i]);
            }
            union.add(array2[i]);
        }
    }
    console.log("union" + union + "intersection" + intersection);
    console.log("union is " + Array.from(union) + " intersection is " + Array.from(intersection));
    return;
}

var A = [1,3,3,4,5,7];
var B = [2,3,5,6];

findUnitS(A,B);
findUnitS2(A,B);