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



/**
 * 两次遍历,与687同理
 */
class Solution {
    
    public int longestSinglePath,longestPath=0;
    public int diameterOfBinaryTree(TreeNode root) {
        preorder(root);
        return longestPath;
    }
    
    
    
    public void preorder(TreeNode root){
        if(root!=null){
            
            // 求左单向最大路径
            longestSinglePath=0;
            path(root.left,0);
            int longLeftPath=longestSinglePath;
            
            // 求右单向最大路径
            longestSinglePath=0;
            path(root.right,0);
            int longRightPath=longestSinglePath;
            
            // longLeftPath+longRightPath为经过root的最大路径
            longestPath=Math.max(longestPath,longLeftPath+longRightPath);
            
            preorder(root.left);
            preorder(root.right);
        }
        
    }
    
    // 求单向最大路径
    private void path(TreeNode root,int pathCount){
        if(root!=null){
            pathCount++;
            longestSinglePath=Math.max(longestSinglePath,pathCount);
            
            path(root.left,pathCount);
            path(root.right,pathCount);
        }
        
    }
    
}
