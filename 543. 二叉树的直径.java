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
     * 遍历所有节点，求每个节点的左子树高度与右子树高度之和，最大值即为答案
     */
    
    public int currentMaxdiameter=0;
    
    public int diameterOfBinaryTree(TreeNode root) {
        
        diameter(root);
        
        return currentMaxdiameter;
    }
    
    private int diameter(TreeNode root){
        if(root!=null){
            
            int left_depth=diameter(root.left);
            int right_depth=diameter(root.right);
            
            int depth=Math.max(left_depth,right_depth)+1; // 获取当前子树高度
            
            currentMaxdiameter=Math.max(currentMaxdiameter,left_depth+right_depth); // 更新左右子树高度和的最大值
                
            return depth; 
        }
        else
            return 0;
    }
    
}
