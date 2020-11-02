/**
 * 不同于 225,232,本题不能动态操作数组(即使用 arr.unshift,arr.push)
 * 参考 https://leetcode-cn.com/problems/design-circular-queue/solution/dan-ke-xi-lie-yong-shi-9982nei-cun-10000-by-lvshan/
 */

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    // 循环队列容量
    this.capacity=k
    // 指向队首元素
    this.head=-1
    // 指向队尾元素
    this.tail=-1
    // 初始化循环队列
    this.roundQueen=[]
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()){
        return false
    }
    // 如果是添加第一个元素,要将 head 也一起修改
    if(this.isEmpty()){
        this.head=0
    }
    this.tail=(this.tail+1)%this.capacity
    this.roundQueen[this.tail]=value
    return true
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){
        return false
    }
    // 假如目前队列只有一个元素
    if(this.head===this.tail){
        this.head=this.tail=-1
    }else{
        this.head=(this.head+1)%this.capacity
    }
    return true
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()){
        return -1
    }else{
        return this.roundQueen[this.head]
    }
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()){
        return -1
    }else{
        return this.roundQueen[this.tail]
    }
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head===-1
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    // 假设容量为7:head=0,tail=6 和 head=3,tail=2都表示队列达到"满"的状态
    return this.head===(this.tail+1)%this.capacity
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
