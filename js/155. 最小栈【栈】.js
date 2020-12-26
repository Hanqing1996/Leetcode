/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack=[]
    this.minStorage=[]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    let len=this.minStorage.length
    if(len===0||this.minStorage[len-1]>=x){
        this.minStorage.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let topValue=this.top()
    if(topValue===undefined)
        return
    this.stack.pop()
    if(topValue===this.minStorage[this.minStorage.length-1])
        this.minStorage.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length===0)
        return
    return this.stack[this.stack.length-1]    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.minStorage.length===0)
        return
    return this.minStorage[this.minStorage.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
