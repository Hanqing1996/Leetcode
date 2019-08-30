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
    
    public int sameValue;
    public boolean ifSame=true;
    public boolean isUnivalTree(TreeNode root) {
        if(root==null)
            return false;
        
        sameValue=root.val;
        preorder(root);
        
        return ifSame;
    }
    
    private void preorder(TreeNode root){
        if(root!=null){
            if(root.val!=sameValue)
                ifSame=false;
            
            preorder(root.left);
            preorder(root.right);
        }
        
    }
}
