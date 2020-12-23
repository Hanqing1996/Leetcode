/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head==null)
        return null

    const traverse=function(head){
        // 查找链表中点
        let quick=head,slow=head
        let pre
        // 这里的 while 条件也可以是 quick.next&&quick.next.next，只是[-10, -3, 0|, 5, 9]和[-10, -3|, 0, 5, 9]的区别而已
        while(quick&&quick.next&&slow){
            pre=slow
            slow=slow.next
            quick=quick.next.next
        }

        // slow 现在指向链表中间位置,pre.next 指向 slow 前一个节点
        /**
         * 比如 1 2 3 4 5
         * slow 指向 3,pre 指向 2
         */
        let rootValue=slow.val
        let root=new TreeNode(rootValue)
        


        // 有可能 head 链表只有两个节点，此时第一个节点就是中间节点，换而言之，此时链表对应节点没有左子树
        if(pre){
            // 左链
            pre.next=null // 只是把 pre.next（一个指向堆内存的地址值）修改为 null 而已
            let left=head
            root.left=left==null?left:traverse(left)

        }

        // 右链
        let right=slow.next
        root.right=right==null?right:traverse(right)
        return root
    }
    return traverse(head)
};
