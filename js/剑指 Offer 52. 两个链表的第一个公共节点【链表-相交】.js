/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/**
 * 设交集长度为 c,headA 除去交集外长度为 a,headB 除去交集外长度为 b
 * 则 a+c+b=b+c+a,两条相交的链表,只要各自一步步走完自己的路，再走完对方与自己不同的那部分路，就一定会相遇在相交点
 * 太浪漫了吧
 */
var getIntersectionNode = function(headA, headB) {
    let currentA=headA
    let currentB=headB

    while(currentA!=currentB){
        // 是否到达自己这条链表的终点，若到达，则开始走对方的路
        currentA=currentA===null?headB:currentA.next
        currentB=currentB===null?headA:currentB.next
    }
    return currentA
};
