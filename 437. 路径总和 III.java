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
    
    public int pathCount=0,requireSum=0;
    public int pathSum(TreeNode root, int sum) {
        
        requireSum=sum;
        
        preOrder(root);
        
        return pathCount;
    }
    
    // 搜索每个节点到其子节点的所有路径，若存在路径和为sum，则pathCount++
    private void path(TreeNode root, int currentSum){
        
        if(root!=null){
            
            if(currentSum+root.val==requireSum)
                pathCount++;
            
            path(root.left,currentSum+root.val);
            path(root.right,currentSum+root.val);
                
        }
    }
    
    // 由于一次遍历总是只能计算以根结点开始的累计和，因此需要进行两次遍历以保证所有节点都做过根节点
    private void preOrder(TreeNode root){
        
         if(root!=null){
            
            path(root,0);
            preOrder(root.left);
            preOrder(root.right); 
        }
    }
 
}

/**
 * 树形dp
 */
class Solution {
    
    public int requireSum;
    public int pathSum(TreeNode root, int sum) {
        requireSum=sum;
        
    }
    
    public void sumCurrentNode(TreeNode root){
        if(root==null) return 0;
        
        if(currentSum==requireSum)
        
        
        return sumCurrentNode(root.left)+root.val
            
        sumCurrentNode(root.right)+root.val;    
        
        sumCurrentNode(root.left)
            
        sumCurrentNode(root.right)    
            
    }
}
