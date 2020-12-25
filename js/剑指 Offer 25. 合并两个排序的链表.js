/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 不要把 l2 合并到 l1 中，用新链表
var mergeTwoLists = function(l1, l2) {
    let headNode=new ListNode()
    let pre=headNode

    while(l1&&l2){
        if(l1.val<l2.val){
            pre.next=l1
            l1=l1.next
        }else{
            pre.next=l2
            l2=l2.next
        }
        pre=pre.next
    }

    // 收尾工作
    if(l1)
        pre.next=l1
    if(l2)
        pre.next=l2 
    return headNode.next       
};
