/**
 * Created by lee on 10/18/16.
 */

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
    this.inOrder = inOrder;
    this.getMin = getMin;
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



/**
 *  get Min value in BST
 * */

function getMin () {
    var current = this.root;
    while (!(current.left == null)) {
        current = current.left;
    }
    return current.data; //如果 current 这个current是空的情况下, current
}


/**
 * find a centain value
 * */

BST.prototype.find = function (value) {
    var current = this.root;
    while(current != null) {
        if (current.data == value) {
            return current;
        } else if (value < current.data) {
            current = current.left;
        } else if (value > current.data) {
            current = current.right;
        }
    }
    return null;
}

/**
 * delete the TreeNode
 *
 * */

BST.prototype.Delete = function (data) {

    var dummyRoot = new Node(-1000,this.root,null);
    var prev = dummyRoot;
    var cur = this.root;
    // 1. find the node with vale
    while (!(cur == null && cur.data == null)) {
        prev = cur;
        if(cur.val)
    }

}


/**
 * main function test
 * */

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

print("inorder traversal:");
// inOrder(nums.root);
var min = nums.getMin();
print("the minimum value of the BST is: " + min);

// find a certain value
var found = nums.find(23);
if(found != null) {
    print("found the value: " + found.data);
} else {
    print("value has no found")
}