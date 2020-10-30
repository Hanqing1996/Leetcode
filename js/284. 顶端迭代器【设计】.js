/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */


/**
 * next 后调用 peek 结果不同，说明 next 要清理缓存
 * peek 后调用 next 结果相同，说明 peek 要调用缓存
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
    this.iterator = iterator;
    this.cache = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    if (!this.cache) this.cache = this.iterator.next();
    return this.cache;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    if (this.cache) {
        let temp = this.cache;
        this.cache = null;
        return temp;
    } else {
        return this.iterator.next();
    }
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    if (this.cache) return true;
    return this.iterator.hasNext();
};

/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
