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

// 先用快慢指针确定链表终点，再反转后半部分链表。最后遍历比较即可。
var isPalindrome = function(head) {
    if(!head||!head.next)
        return true
    
    let emptyNode=new ListNode()
    emptyNode.next=head

    // pre 为 p 的前继节点
    let p=emptyNode,q=emptyNode

    // 链表至少有两个节点。
    // 1 2 3 4 5,最后p指向3,q指向null
    // 1 2 3 4,最后p指向2,q指向4
    while(q&&q.next){
        q=q.next.next
        p=p.next
    }

    console.log(p.next)

    let start=p.next

    let current=start
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
        // 将start更新为刚刚前插的节点
        toInsert.next=start
        start=toInsert
    }

    // 两条链表逐个遍历，至后半段链表结束
    let p1=head,p2=start
    while(p2){
        if(p1.val!=p2.val)
            return false
        p1=p1.next
        p2=p2.next
    }
    return true

};
