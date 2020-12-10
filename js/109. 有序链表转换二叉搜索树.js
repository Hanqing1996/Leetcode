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

    if(head===null)
        return null

    const traverse=function(head){
        let slow=head
        let quick=head
        let pre
        // slow 走一步,quick 走两步
        while(quick!=null&&quick.next!=null){
            pre=slow
            slow=slow.next
            quick=quick.next.next
        }
        // slow 现在指向链表中间位置,pre.next 是 slow
        /**
         * 比如 1 2 3 4 5
         * slow 指向 3,pre 指向 2
         */

        let root=new TreeNode(slow.val)

        // 右链
        let rightPoint=slow.next

        

        if(pre!=null){
            // 左链 
            let leftPoint=head
            pre.next=null
            root.left=traverse(leftPoint)
        }

        

        
        root.right=rightPoint===null?null:traverse(rightPoint)
        return root
    }
    return traverse(head)
};




