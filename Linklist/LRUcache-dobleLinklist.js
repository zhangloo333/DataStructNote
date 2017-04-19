var Node = function (key,value) {
    this.key = key;
    this.value = value;

    this.next = null;
    this.prev = null; // 方便插入，不用再遍历查找到 前后的节点了
}
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.keyMap = new Map();

    this.head = new Node('head','head');
    this.tail = new Node('tail','tail');

    this.head.prev = this.tail;
    this.head.next = this.tail;

    this.tail.prev = this.head;
    this.tail.next = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
   var node = this.keyMap.get(key);
    if(node != undefined) {
        this.detach(node);
        this.attach(node);
    }
    return node == undefined ? -1 : node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    var node  = this.keyMap.get(key);

    if(node == undefined) { // 没有
        if(this.keyMap.size == this.capacity) {
            this.keyMap.delete(this.head.next.key);
            this.detach(this.head.next);
        }
        node = new Node(key,value);
        this.keyMap.set(key,node);
        this.attach(node);

    } else{
        node.value = value;
        this.detach(node);
        this.attach(node);

    }
};

LRUCache.prototype.attach = function (node) {
    if(node instanceof Node) {
        //向tail的前面插入

        node.next = this.tail;
        node.prev = this.tail.prev;

        this.tail.prev.next = node;
        this.tail.prev = node;

    } else {
        return -1;
    }

}

LRUCache.prototype.detach = function (node) {
    if(node instanceof Node) {
        //在两个当中把
        node.prev.next = node.next;
        node.next.prev = node.prev;

        node.prev = null;
        node.next = null;

    } else {
        return -1;
    }

}