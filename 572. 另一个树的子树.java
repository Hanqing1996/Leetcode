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
    
    public TreeNode target=null;
    public boolean ifSub;
    
    public boolean isSubtree(TreeNode s, TreeNode t) {
        
        target=t;
        preOrder(s);
        
        return ifSub;
    }
    
    private boolean Subtree(TreeNode root1,TreeNode root2){
        
        if(root1!=null&&root2!=null){
            
            if(root1.val!=root2.val)
                return false;
            else
                return Subtree(root1.left,root2.left)&&Subtree(root1.right,root2.right);
        }
        else if((root1!=null&&root2==null)||(root1==null&&root2!=null))
            return false;
        else
            return true;
        
    }
    
    // 由于一次遍历总是只能判断以根结点开始的子树，因此需要进行两次遍历以保证所有节点都做过根节点
    private void preOrder(TreeNode root){
        
         if(root!=null){
            
            if(Subtree(root,target))
                ifSub=true;
            preOrder(root.left);
            preOrder(root.right); 
        }
    }
    
}
