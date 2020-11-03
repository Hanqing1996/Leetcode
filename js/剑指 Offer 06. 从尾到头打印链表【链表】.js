/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let ans=[]
    let current=head
    while(current){
        ans.unshift(current.val)
        current=current.next
    }
    return ans
};
