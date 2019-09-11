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
    
    public int requireVal;
    public TreeNode result=null;
    public TreeNode searchBST(TreeNode root, int val) {
        
        requireVal=val;
        preorder(root);
        return result; 

    }
    
    public void preorder(TreeNode root){
        if(root!=null){
            if(root.val>requireVal)
                preorder(root.left);
            if(root.val<requireVal)
                preorder(root.right);
            if(root.val==requireVal)        
                result=root;
        }
            
    }
}
