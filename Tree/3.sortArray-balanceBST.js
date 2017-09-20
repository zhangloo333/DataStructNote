/**
 * Created by leizha on 11/3/16.
 */
/**
 * 给以个array怎么把它编程balance的tree
 * 1. sort array
 * 2. select middle to add left and right.
 * 3.start > end to stop
 * */
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.show = show;
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

