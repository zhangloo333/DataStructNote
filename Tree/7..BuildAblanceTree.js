/**
 * Created by lee on 11/14/16.
 */
/**
 * This file teach you how to build a balance tree with dynamic node.
 * 这个tree的node是根据先后书序加进来的,但是他们的排列符合一个BFS.排列的书序
 * 这BlanceTree 有几个属性: Array-storage; header-pointer; root;
 * 1. 首先建立一个node的标注类型
 * 2. build balance tree的module类型. 属性: storge + header + root + insert fn
 * 3. insert function 的建立方法;
 *  3.1 首先build no-name node
 *  3.2 然后判断 root ≠ null 等于 null 把先加入的 root = node; 如果不等于null的话,不行循环加入.加入后停止.
 *  3.3 while 的循环体: 首先header在最头器的位置. 通过条件$$ 不停的下移来标记下一次root的新位置.
 *  3.4 如果queue的长度一直大于0的情况下一直循环
 *  3.5 add node  3情况--
 *      1.如果当前root等于的left = null 就添加到左边,
 *      2.如果root.right == null 就加到右边.
 *      3.如果 当前的root.left 和当前的root.right 都不为空的时候. 更新root. header++; 然后在跳转不断地判断.
 *      每次添加之后记得要更新 storage.
 * */

// build a node
function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
}
// build balance tree module
function BBtree(){
    this.root = null;
    this.storage = [];
    this.subTRP = 0;
    this.insert = insert;
}

function insert(data) {
    var node = new Node(data);
    if(this.root == null) {
        this.root = node;
        this.storage.push(this.root);
    } else {
        while(this.storage.length >0){
            if(this.storage[this.subTRP].left == null) {
                this.storage[this.subTRP].left = node;
                this.storage.push(node);
                break;
            } else if(this.storage[this.subTRP].right == null) {
                this.storage[this.subTRP].right = node;
                this.storage.push(node);
                break
            } else if(this.storage[this.subTRP].left != null && this.storage[this.subTRP].right != null) {
                this.subTRP++;
                this.storage.push(node);
            }
        }
    }
}

var BBT = new BBtree();
BBT.insert(1);
BBT.insert(2);
BBT.insert(2);
BBT.insert(3);
BBT.insert(4);
BBT.insert(3);
BBT.insert(4);
BBT.insert(6);
BBT.insert(7);
BBT.insert(8);
BBT.insert(9);
BBT.insert(6);
BBT.insert(7);
BBT.insert(8);
BBT.insert(9);

console.log(BBT.root);

//原始想法--怎么建立一个balance tree 的过程:
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(2);
var node4 = new Node(3);
var node5 = new Node(4);
var node6 = new Node(3);
var node7 = new Node(4);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

console.log(node1);

/**
 * for testing recursion purpose
 * */
//function helper(current,parent, node) {
//    if(current.left == null){
//        current.left = node;
//        return;
//    } else{
//        current.right = node;
//        return;
//    }
//    if(current.left != null && current.right != null){
//        current = current.left;
//
//        helper(current,parent,node);
//        helper(current,parent,node);
//        return current;
//    }
//}


// if(this.queue.length != 0){
//     if(this.queue[0].left != null && this.queue[0].right != null){
//         this.queue.shift();
//     }
//     if(this.queue[0].left == null){
//         this.queue[0].left = node;
//
//     } else {
//         this.queue[0].right = node;
//     }
//     this.queue.push(Node);
// }
//var current = this.root;
//var parent = current;
//helper(current,parent,node);