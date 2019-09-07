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
    
    public boolean isValid=true;
    public TreeNode pre=null;
    
    public boolean isValidBST(TreeNode root) {
        
        inOrder(root);
        return isValid;
    }
   
    private void inOrder(TreeNode root){
        if(root!=null){
        
            inOrder(root.left);
            if(pre!=null){
                
                if(root.val<=pre.val)
                    isValid=false;
            }
            pre=root;
            inOrder(root.right);
        }
        
    }
}
