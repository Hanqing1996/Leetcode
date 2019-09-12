/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

/**
 * 1.这里的两个节点交换，指的是两个节点的数组交换，因此只要用两个指针指向这两个节点,再交换数值即可
 * 2.中序遍历获得的数组存在两个应该被交换的数字，这两个数字只有两种情况,相邻或者不相邻
 */

class Solution {
    
    public TreeNode pre=null,firstNode,secondNode,tempNode;
    public boolean firstFind=false,secondFind=false;
    
    public void recoverTree(TreeNode root) {
        
        // 中序遍历，检查出需要交换数值的两个节点
        inorder(root);
        
        // 没有发现第二组逆序的数，说明为相邻情况
        if(secondFind==false)
            secondNode=tempNode;
        
        // 交换两个节点的值
        int firstVal=firstNode.val;
        int secondVal=secondNode.val;
        firstNode.val=secondVal;
        secondNode.val=firstVal;
    }
    
    public void inorder(TreeNode root){
        if(root!=null){
            inorder(root.left);
            if(pre!=null&&root.val<pre.val){
                if(firstFind==false){
                    firstNode=pre;
                    tempNode=root; // 相邻情况下,secondNode=tempNode
                    firstFind=true;
                }
                else if(secondFind==false){
                    secondNode=root;
                    secondFind=true;
                }
            }
            pre=root;
            inorder(root.right);
        }
        
    }
}
