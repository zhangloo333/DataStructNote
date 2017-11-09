/**
 * Created by lee on 10/29/17.
 */



function BoxStack(boxes) {
    boxes.sort(function (a,b) {
        return b[0]*b[1] > a[0]*a[1];
    })

    // build h array to db
    var msh = [];
    for(var i = 0; i < boxes.length; i++) {
        msh.push(boxes[i][2]);
    }
    console.log(msh);

    // solve the problem dynamically for each box
    for(var i = 1; i < msh.length;i++) {
        for(var j = 0; j < i; j++) {
            if(boxes[i][0] < boxes[j][0]
            && boxes[i][1] < boxes[j][1]
            && msh[i] < msh[j] + boxes[i][2]) {
                msh[i] = msh[j] + boxes[i][2];
            }
        }
    }

    // find the maxium height possible and return its value
    var max = -1;
    for(var i = 0; i < msh.length; i++) {
        if(max < msh[i]){
            max = msh[i];
        }
    }

    return max
}


console.log(BoxStack(test));


// sort 一个box的最大面积
function sort(arr) {
    return arr.sort(function (a,b) {
        return b[0]*b[1] > a[0]*a[1];
    })
}
var test = [
    [12,32,10],
    [10,32,12],
    [10,12,32],
    [5,6,4],
    [4,6,5],
    [4,5,6],
    [2,3,1],
    [1,2,3],
    [1,3,2],
    ]

console.log(sort(test));
