/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 按照题意，应该不存在 k<链表长度的测试用例
// 建立一个滑动窗口（也可以理解是左右两个双指针），检测窗口右端是否抵达最后一个节点
var getKthFromEnd = function(head, k) {
    let left=1,right=1
    let current=head
    // 先控制 right 距离 left 为 k 
    while(right!=k){
        current=current.next
        right++
    } 
    // 现在 leftPoint 指向第1个节点，rightPoint 指向第k个节点
    let leftPoint=head,rightPoint=current
    while(rightPoint.next!=null){
        leftPoint=leftPoint.next
        rightPoint=rightPoint.next
    }
    return leftPoint
};
