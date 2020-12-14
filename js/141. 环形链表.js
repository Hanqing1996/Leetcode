/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let cache=[]
    let current=head
    while(current){
        if(cache.indexOf(current)>=0)
            return true
        cache.push(current)    
        current=current.next
    }
    return false
};
