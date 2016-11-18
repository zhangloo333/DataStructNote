/**
 * Created by leizha on 11/17/16.
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


/** Build a tree node
 * */
function print(data) {
    console.log(data);

}

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



function inorderSuccessor(root, target) {
    if(root == null) {
        return null;
    }
    // case 1: has right child
    if(target.right != null) {
        return searchLeftMost(target.right);
    }
    // case 2: no right ---> find the f

}


function searchLeftMost(root) {
    while(root.left != null) {
        root = root.left;
    }
    return root;

}


var nums1 = new BST();
nums1.insert(7);
nums1.insert(3);
nums1.insert(9);
nums1.insert(1);
nums1.insert(5);
nums1.insert(4);
nums1.insert(6);

print("inorder traversal:---------");
// inOrder(nums1.root);
print(FindTNext(nums1.root,5));




/**
 * for testing porpurs
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