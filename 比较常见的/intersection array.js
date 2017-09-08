/**
 * Created by lee on 9/7/17.
 * 如果不是一个sort array，就借助 set，map 来实现
 * 如果是一个sort array； 就可以用指针 直接来求
 */

// sort array
function findSection(arr1,arr2) {

    var point1 = 0, point2 = 0;
    var result =[];

    while(point1 < arr1.length-1 && point2 < arr2.length-1) {

        if(arr1[point1] == arr2[point2]){
            result.push(arr1[point1]);
            point1++;
            point2++;
        } else if(arr1[point1] > arr2[point2]) {
            point2++;
        } else {
            point1++;
        }

        // console.log("p1",point1,'p2',point2,'res',result);
    }

    return result;
}
