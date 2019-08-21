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
  * 基于先序遍历的递归
  */
class Solution {
    public boolean isSymmetric(TreeNode root) {
        
        if(root==null)
            return true;
        if((root.left==null&&root.right!=null)||(root.left!=null&&root.right==null))
            return false;
        
        return same(root.left,root.right);
    }
    
    private boolean same(TreeNode p,TreeNode q){
        
        if(p!=null&&q!=null)
        {
            if(p.val!=q.val)
                return false;
            else
                return same(p.left,q.right)&&same(p.right,q.left);
        }
        else if((p!=null&&q==null)||(p==null&&q!=null))
            return false;
        else
            return true;
        
    } 
}
