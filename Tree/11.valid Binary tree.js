/**
 * Created by leizha on 11/18/16.
 */
/**
 * 判断一个树是不是 BST valid binary tree
 * 方法1： 用一个global 的变量 max 去保存 in-order遍历的结果。如果max和比当前的node小，return true,
 * 否则 return false， return ture的时候需要改变 max的值，以用来下次的比较。
 * */
// build BST 和 add node

function print(data) {
    console.log(data);
}


/** Build a tree node
 * */

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

/**
 * Build a tree constructor
 */
function BST() {
    this.root = null;
    this.insert = insert;
    this.innOrder = inOrder;
}

/**
 * build a insert() function
 */

function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

/**
 * Build a in-order function
 * */

function inOrder(node) {
    if(!(node == null)){
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}





// validate node 的 fun 主体
var max = null;
function isValidBST(root) {
    if(root == null) {
        return true;
    }
    return DFScheker(root);
}

function DFScheker(root) {
    if(root == null) {
        return true;
    }

    // judge the left tree
    if(!DFScheker(root.left)){
        return false;
    }

    //judge the root node
    if(max != null && root.data <= max) {
        return false;
    }
    max = root.data;

    if(!DFScheker(root.right)) {
        return false
    }

    return true;
}

//方法2：使用 max 和 min 的数在不断的上下传递：
function isvalidBST1(root) {
    if(root == null) {
        return true;
    }
    return isValidBST2(root,Number.MAX_VALUE, Number.MIN_VALUE);
}

function isValidBST2(root, max, min) {
    if(root == null) return true;

    // current level: check root.val
    if(root.data >= max || root.data <= min) {
        return false;
    }
    //returse down
    return isValidBST2(root.left,root.data,min) && isValidBST2(root.right,max, root.data);

}



// var nums1 = new BST();
// nums1.insert(3);
// nums1.insert(1);
// nums1.insert(5);
// nums1.insert(1);
// nums1.insert(6);

var root = new Node(5);
var node2 = new Node(3);
var node3 = new Node(6);
var node4 = new Node(1);
var node5 = new Node(4);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;

print("--------------");
// inOrder(root);
print(isValidBST(root));
print(isvalidBST1(root));

/***
 * http://m.blog.csdn.net/article/details?id=52184999
 * http://www.cnblogs.com/yuzhangcmu/p/4177047.html
 * http://www.cnblogs.com/shuaiwhu/archive/2011/04/20/2065055.html
 * https://www.youtube.com/watch?v=MILxfAbIhrE
 * http://www.cnblogs.com/rubylouvre/archive/2009/09/16/1568123.html
 */
/