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
    
    public int currentMindepth=1000000;
    
    public int minDepth(TreeNode root) {
        if(root==null)
            return 0;
        
        getMinDepth(root,0);
        
        return currentMindepth;
        
    }
    
    private void getMinDepth(TreeNode root,int depth){
        if(root!=null){
            
            depth+=1;
            
            // 如果当前节点是叶子节点，则更新currentMindepth
            if(root.left==null&&root.right==null)
                currentMindepth=Math.min(currentMindepth,depth);
            
            getMinDepth(root.left,depth);
            getMinDepth(root.right,depth);       
        }
    }
    
}
