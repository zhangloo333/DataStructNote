/**
 * Created by leizha on 10/18/16.
 */

// 建立一个node
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

function show() {
    return this.data;
}

// 建立一个tree
function BST() {
    this.root = null;
    this.insert = insert;
    // this.inOrder = inOrder;
}

/*
* 怎么加载一个node
* 1.建立一个node
* 2.查看bst是不是一个空树
* */

function insert(data) {
        var n = new Node(data, null,null);
        if(this.root == null){
            this.root = n;
        } else {
            var current = this.root;
            var parent;
            while (true){
                parent = current;
                if(data < current.data){
                    current = current.left;
                    if(current == null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right;
                    if(current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
}


var tree = new BST();
tree.insert(1);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.insert(10);
tree.insert(6);