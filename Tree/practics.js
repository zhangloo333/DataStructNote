/**
 * Created by leizha on 10/28/16.
 */
/**
function Node (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    console.log(data);
}

function BST() {
    this.root = null;
}

BST.prototype.insert = function (data) {
    var nodeA = new Node(data, null, null);
    if(this.root == null){
        return this.root = nodeA;
    } else {
        var current = this.root;
        var parent;
        while(true) {
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current == null) {
                    parent.left = nodeA;
                    break;
                }
            } else { // 如果插入的数 在一面有一个 相同的元素 树里面有的怎么养
                current = current.right;
                if(current == null){
                    parent.right = nodeA
                    break;
                }
            }
        }
    }
}

var bst = new BST();
bst.insert(1);
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);
console.log("2");


**/
function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right
}

function BST() {
    this.root = null
}

BST.prototype.insert = function (data) {
    var n = new Node(data,null,null);


    if(this.root == null){
        return this.root = n;
    } else{
        var current = this.root;
        var parent;

        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

var btr = new BST();
btr.insert(9);
btr.insert(7);
btr.insert(11);
btr.insert(8);

console.log(123);


var a = [];
a[0] = null;
a.pop();
console.log(a[0]);