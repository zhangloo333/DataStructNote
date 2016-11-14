/**
 * Created by leizha on 11/10/16.
 */
/**
 * 树的每一层都是从左到右的扫遍打印输出。
 * BST的打印方式
 * 1 function input a root
 * 2 生成一个需要输出的array
 * 3 判断这个input root是不是为空的。yes return no 接着下的来
 * 4 build one queue, queue是 bst的重要部件，用来循环输出的。
 * 5 不断的把 node 放进 queue，如果queue不为空的话。要一直把当前层的node加入一个list--当前层用 quen的size来确定当前层，
 * 6 把当前层 iteration the node to add child node with the current list.
 * 7. after adding all child in current layer, add list to add the final rest array 加完到一个.
 *
 * note：
 * 没有array.size, 只有array.length
 *
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

function LevelOrderT(Root) {
    var output = [];
    if(Root == null) {
        return output;
    }
        var queue = [];
    console.log(queue.length);
        queue.push(Root);
        while(!(queue.length == 0)){
            var size = queue.length;
            var list = [];

            for(var i = 0; i <size; i++){
                // var list = [];// wrong place
                var cur = queue.shift();
                list.push(cur.data);// wrong place
                if(cur.left != null){  //记住写这一步
                    queue.push(cur.left);
                }
                if(cur.right != null){
                    queue.push(cur.right);
                }
                // list.push(cur);// wrong place
            }
            output.push(list);
        }
        return output;
}

function inOrder(node) {
    if(!(node == null)){
        inOrder(node.left);
        console.log(node.show());
        inOrder(node.right);
    }
}

// var a = [];
// a.push(1);
// a.push(2);
// a.push(3);
// console.log(a.shift());

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

console.log("inorder traversal:");
inOrder(nums.root);

var abc = LevelOrderT(nums.root);
console.log(abc);

