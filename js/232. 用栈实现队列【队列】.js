/**
 * 用两个栈来模拟队列，
 * 思路参考 https://leetcode-cn.com/problems/implement-queue-using-stacks/solution/shi-yong-liang-ge-zhan-yi-ge-zhuan-men-ru-dui-yi-g/
 */


/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stackPush=[]
    this.stackPop=[]
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackPush.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.stackPop.length>0){
        return this.stackPop.pop()
    }else{
        // 先将 stackPush 的元素转移到 stackPop 中，即 [1,2,3]=>[3,2,1]
        this.stackPop=this.stackPush.reverse()
        // 并将 stackPush 置空
        this.stackPush=[]
        return this.stackPop.pop()
    }
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let {length}=this.stackPop
    if(this.stackPop.length>0){
        return this.stackPop[length-1]
    }else{
        // 先将 stackPush 的元素转移到 stackPop 中，即 [1,2,3]=>[3,2,1]
        this.stackPop=this.stackPush.reverse()
        // 并将 stackPush 置空
        this.stackPush=[]

        length=this.stackPop.length
        return this.stackPop[length-1]
    }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // 两个栈都为空，才说明队列为空
    return this.stackPush.length===0&& this.stackPop.length===0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
