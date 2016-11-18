/**
 * Created by lee on 11/17/16.
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

function inOrder(node) {
    if(!(node == null)){
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}

// BST inorder successor fn 主体
function inorderSuccessor(root, target) {
    if(root == null) {
        return null;
    }
    //case 1: has right child
    if(target.right != null){
        return searhLeftMost(target.right);
    } else {
        // case2 no right --> find the first left turing on the searching path
        return searchMarker(root, target);
    }
}

function searchMarker(root, target) {
    var Marker  = null;
    while(root != target && root != null) { //加上root不能为null 否则找不到null的下一层.
        if(target < root.data) {
            Marker = root.data;
            root = root.left;
        }else {
            root = root.right;
        }
    }
    return Marker;
}

function searchLeftMost(root){
    while(root != null) {
        root = root.left;
    }
    return root.data;
}




var nums = new BST();
nums.insert(7);
nums.insert(3);
nums.insert(9);
nums.insert(1);
nums.insert(5);
nums.insert(4);
nums.insert(6);

print("inorder traversal:");
inOrder(nums.root);
print("--------------------");
print(inorderSuccessor(nums.root,7));
print(inorderSuccessor(nums.root,3));
print(inorderSuccessor(nums.root,9));
print(inorderSuccessor(nums.root,1));
print(inorderSuccessor(nums.root,5));
print(inorderSuccessor(nums.root,4));
print(inorderSuccessor(nums.root,6));