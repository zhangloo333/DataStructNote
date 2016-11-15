/**
 * Created by leizha on 11/10/16.
 */
/**
 *  Symmetric tree：  是不是镜面对称的。
 *  从root劈开，如果左右两面都是重合的话，就是symeetric tree
 *  本质是判断两个点是否相同.
 *
 * 1. input a tree.
 * 2. if tree root is null return true else
 * 3. 在判断调用一个判断函数---判断两个点是否是相同的.
 * 4. 这个判断函数:
 *    4.1 判断这个函数两个之间是否有一个是null, 如果两个都是null,那么return true.
 *    4.2 如果只有num1 和 num2 不相等的话. 就return flase
 *    4.3 如果两个函数 值是不相等, return false.
 *    4.4 否则,调用这个函数,来判断当有一层有4个孩子的时候,他的对称情况. 第一个孩子和第三孩子是否对程.
 *    第二个孩子和第四个孩子是否对称.
 *
 * method 2:
 * 基于BST的算法, 用一个两个queue(也可以是一个deque)来逐层遍历找对应结果.
 * 1. input 一个tree node
 * 2. 判断这个node是不是一个null的树,是的话返回.
 * 3. 首先implement一个deque来用.
 * 4. 从左边放入root的又孩子,从右边放入root的做孩子.
 * 5. while循环来决定下面的重复过程. 停止条件是这个deque停止了.
 *      5.1. 用来个比较的两变量(reference/pointer)- 用于以后的不断循环.
 *      5.2 来判断 这两个reference是否为null; 同时被推出.说明deque里面空的.就可以停止while的循环了.
 *      5.3 返回false--left or right = null. right.val != right.val 就返回 false
 *      5.4 然后下一层: 从左边的顺序:right to left, 右边: left to right.
 *
 *      push---add one or more elements to the end of array.
 *      unshift() add one or more elements to the front of array
 *
 *
 * 循环结束 true.
 * */

function isSymmetric(root) {
    if(root == null) {
        return true;
    }
    var deque = [];
    deque.unshift(root.left);
    deque.push(root.right);
    while(deque.length != 0) {
        var left = deque.shift();
        var right = deque.pop();

        if(left == null && right == null) {
            continue;
        }

        if(left == null || right == null || left.data != right.data) {
            return false;
        }

        deque.unshift(left.right);
        deque.unshift(left.left);
        deque.push(right.left);  // 这里是right 不是left
        deque.push(right.right);  // 这里是right 不是left
    }
    return true;
}

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show(){
    return this.data;
}

function buildTree(){
    this.root = null;
    this.insert = insert;
    this.queue = [];
    this.header = 0;
}

function insert(data){
    var node = new Node(data,null,null);

    if(this.root == null) {
        this.root = node;
        this.queue.push(this.root);
    } else{

        while(this.queue.length >0){
            if(this.queue[this.header].left == null){
                this.queue[this.header].left = node;
                this.queue.push(node);
                break;
            }else if(this.queue[this.header].right == null){
                this.queue[this.header].right = node;
                this.queue.push(node);
                break;
            }else if(this.queue[this.header].left != null && this.queue[this.header].right != null){
                this.header++;
                this.queue.push(node);
            }
        }
    }
}



var BB = new buildTree();
BB.insert(1);
BB.insert(2);
BB.insert(2);
BB.insert(4);
BB.insert(5);
BB.insert(5);
BB.insert(4);
BB.insert(6);
BB.insert(7);
BB.insert(8);
BB.insert(9);
BB.insert(9);
BB.insert(8);
BB.insert(7);
BB.insert(6);

var Symmetric = isSymmetric(BB.root);
console.log(Symmetric);


