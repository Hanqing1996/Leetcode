/**
 * 此题与 232. 用栈实现队列 https://leetcode-cn.com/problems/implement-queue-using-stacks/ 相同
 */

var CQueue = function() {
    this.pushStack=[]
    this.popStack=[]
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.pushStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // 若 popStack 未空，直接取 popStack 中的元素 
    if(this.popStack.length>0){
        return this.popStack.pop()
    }
    if(this.pushStack.length===0)
        return -1
    // 将 pushStack 中的元素逐个出栈，转移到 popStack 中
    while(this.pushStack.length){
        let top=this.pushStack.pop()
        this.popStack.push(top)
    }
    return this.popStack.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
