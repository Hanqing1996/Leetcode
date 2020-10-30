/**
 * 以下做法不满足“在常数时间内检索到最小元素”
 */
var MinStack = function() {
    this.stack=[]
};

MinStack.prototype.push = function(x) {
    this.stack.push(x)
};

MinStack.prototype.pop = function() {
    this.stack.pop()
};

MinStack.prototype.top = function() {
    let {length}=this.stack
    return this.stack[length-1]
};

MinStack.prototype.getMin = function() {
    let minValue=this.stack[0]
    for(let i=1;i<this.stack.length;i++){
        if(this.stack[i]<minValue){
            minValue=this.stack[i]
        }
    }
    return minValue
};


/**
 * 以下做法利用辅助栈 helper 保存 stack 当前最小值
 */
var MinStack = function() {
    this.stack=[]
    this.helper=[]
};

MinStack.prototype.push = function(x) {
    this.stack.push(x)
    let {length}=this.helper
    // 比较 x 与 helper 的栈顶元素
    if(this.helper.length==0||x<=this.helper[length-1]){
        this.helper.push(x)
    }
};

MinStack.prototype.pop = function() {
    let last=this.stack.pop()
    let {length}=this.helper
    // 如果要出栈的元素正好是 stack 的最小元素，那么 helper 也要将其出栈
    if(this.helper.length>0&&this.helper[length-1]===last){
        this.helper.pop()
    }
};

MinStack.prototype.top = function() {
    let {length}=this.stack
    return this.stack[length-1]
};

MinStack.prototype.getMin = function() {
    return this.helper[this.helper.length-1]
};

