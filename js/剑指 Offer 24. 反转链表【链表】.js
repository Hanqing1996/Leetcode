/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 节点个数可能为0
    if(head==null)
        return head
    let current=head
    while(current.next!=null){
        // 采用头插法
        // 1 2 3 4 5
        // 逐步反转
        // 2 1 3 4 5
        // 3 2 1 4 5
        // 4 3 2 1 5
        // 5 4 3 2 1    

        // toInsert 即为要插入到最前面的指针
        let toInsert=current.next 
        // 我们需要不断将 current.next 移到链表最前面
        current.next=toInsert.next
        // 将head更新为刚刚前插的节点
        toInsert.next=head
        head=toInsert
    }
    return head
};
