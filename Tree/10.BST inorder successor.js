/**
 * Created by lee on 11/17/16.
 */

/**
 *  BST 的中序便利就是从小到达 排列这个数。
 *  题目给你一个BST 和一个 node 在in-order排序中找到这个点的next node。如果没有找到返回null
 *  case1: 如果找到的节点有右子树(right child)- successor = left tree 最小的节点。
 *  case2: no right child - successor = node的parance.
 *  case3: no right child && is right child
 *  case4: last node  is null
 *
 *  其实就是拐点的parent 就是要找的值
 * */


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

/**
 * for testing purpose--用traverse的想法来 通过中间层的变化来改变。
 * 假设不成立： 应为遍历的情况下，要把他的所有节点有便利一遍。 下载是找到这个node 然后找他的inorder的下一个。
 * */
var flag =1;
function FindTNext(node,target) {
    if(!(node == null)){

        FindTNext(node.left,target);
        if(flag === 0) {
            print(node.data);

        }
        if(node.data == target){
            flag = 0;
            return;
        }
        FindTNext(node.right,target);

    }
}
