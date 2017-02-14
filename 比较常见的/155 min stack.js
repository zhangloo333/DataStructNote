/**
 * Created by leizha on 2/13/17.

 push(x) -- Push element x onto stack.
 pop() -- Removes the element on top of the stack.
 top() -- Get the top element.
 getMin() -- Retrieve the minimum element in the stack.


 这个题有个 trick的地方，如果 只用一个变量来保存，如果最小的被，pop出去的时候，那么就不知道谁最小了。这时候最好的是有一个array
 记录最小，倒数第二小，倒数第三小

 */

var MinStack = function() {
    this.storage = [];
    this.minNum = [];

};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    var len = this.minNum.length;
    if(this.storage.length === 0 ||this.minNum[len-1] >= x){
        this.minNum.push(x);
    }

    this.storage.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var elem;
    var len = this.minNum.length;
    if(this.storage.length >0) {
        elem = this.storage.pop();
    }
    if(elem === this.minNum[len-1]){
        this.minNum.pop();
    }

};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    var size = this.storage.length;
    if( size > 0){
        return this.storage[size-1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    var len = this.minNum.length;
    return this.minNum[len-1];
};