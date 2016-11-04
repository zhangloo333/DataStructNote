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

function show() {
 return this.data;

}

function ArrayToBST(nums) {
    if(nums == null || nums.length == 0){
        return null
    }
    

}

function buildTree(nums,start,end) {
    if(start > end){
        return null;
    }
    var middle = start + Math.trunc((end - start)/2);

    
}

