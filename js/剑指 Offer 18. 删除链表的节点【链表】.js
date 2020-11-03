/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let firstNode=new ListNode(val-1)
    firstNode.next=head
    let current=firstNode
    while(current){
        console.log(current)
        if(current.next.val===val){
            current.next=current.next.next
            break
        }
        current=current.next
    }
    // 由于 head 可能正好是删除的节点，所以我们应该返回 firstNode.next 
    head=firstNode.next
    return head
};
