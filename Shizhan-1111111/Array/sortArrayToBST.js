/**
 * Created by lee on 9/8/17.
 */


function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

var sortArrayToBst = function (array) {

    return help(array,0,array.length-1);
}

var help = function (array, start, end) {
    if(start > end) return null;

    var mid = parseInt((start + end)/2);
    var val = array[mid];

    var node = new TreeNode(val);
    node.left = help(array,start,mid-1);
    node.right = help(array,mid+1, end);
    return node;
}


var print = function (root) {

    var queue = [root];

    while(queue.length !== 0) {
        var size = queue.length;
        var level = [];
        for(var i = 0; i < size; i++) {

               var cur = queue.shift();
               level.push(cur.val);

            if(cur.left != null) queue.push(cur.left);
            if(cur.right != null) queue.push(cur.right);
        }
        console.log(level);
        console.log('--------');
    }
}


var sort = [1,2,3,4,5,6,7,8];
// console.log(sortArrayToBst(sort));
print(sortArrayToBst(sort));