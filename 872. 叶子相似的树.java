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
    
    public List<Integer> temp=new ArrayList();
    public List<Integer> leaves1=new ArrayList();
    public List<Integer> leaves2=new ArrayList();
    
    public boolean leafSimilar(TreeNode root1, TreeNode root2) {
        
        preOrder(root1);
        leaves1=temp;
        
        temp=new LinkedList<>();
        preOrder(root2);
        leaves2=temp;
        
        return leaves1.equals(leaves2);
    }
    
    public void preOrder(TreeNode root){
        if(root!=null){
            if(root.left==null&&root.right==null){
                temp.add(root.val);
            }
            preOrder(root.left);
            preOrder(root.right);
        }
    }
}
