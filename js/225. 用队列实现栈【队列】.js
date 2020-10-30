/**
 * 题意可能有点绕，其实牵涉到三种数据结构，栈，队列，以及js中的数组。
 * 我们可以用 js 的数组来模拟栈(pop,push)，见 155. 最小栈,也可以用 js 的数组来模拟队列(push,unshfit)
 * 本题就是希望，我们只调用 js 数组的 pop,unshift 方法，来实现栈的"后入先出"特性
 */

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.queen=[]
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // 我们必须调整队列内容，以保证队首是刚入队的队尾元素，这样调用 queen.shift 得到的就是刚入队的元素
    let temp=[x]
    for(let i=0;i<this.queen.length;i++){
        temp.push(this.queen[i])
    }
    this.queen=temp
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
   return this.queen.shift()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    // 队首保存刚入队的元素，即所谓"栈顶元素"
    return this.queen[0]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queen.length===0
};
