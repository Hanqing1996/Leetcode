/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 设置头节点
    let dummy=new ListNode()
    dummy.next=head
    let quick=dummy,slow=dummy 

    let count=0

    // 先让quick走n步
    while(count<n){
        quick=quick.next
        count++
    }
    
    let pre=slow
    slow=slow.next

    while(quick.next!=null){
        pre=slow
        quick=quick.next
        slow=slow.next
    }
    pre.next=slow.next
    return dummy.next
};
