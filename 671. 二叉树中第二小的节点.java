/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    /**
     * 揣摩题意后很容易发现，最小值一定为根结点，因此:一次遍历，求大于根结点的最小值即可
     * 注意第二小的值初始值必须为遍历过程中第一个大于根结点的值
     */
    public int Mini,secondMini;
    public boolean initSecondMini=false;
    public int findSecondMinimumValue(TreeNode root) {
        Mini=root.val;
        preorder(root);
        
        // 树中节点全部与根节点值相同
        if(initSecondMini==false)
            return -1;
        
        return secondMini;
        
    }
    
    private void preorder(TreeNode root){
        if(root!=null){
            
            if(root.val!=Mini){
                if(initSecondMini==false){
                    secondMini=root.val;
                    initSecondMini=true;
                }
                else 
                    secondMini=Math.min(secondMini,root.val);
                }
            
            preorder(root.left);
            preorder(root.right);
        }
    }

}
