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
    
    public int requireSum;
    public List<List<Integer>> PathsList =new LinkedList<>();
    public List<Integer> currentPathList=new LinkedList<>();
    
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        requireSum=sum;
        preOrder(root,0);
        return PathsList;
    }
    
    public void preOrder(TreeNode root,int currentSum){
        if(root!=null){
            currentSum+=root.val;
            currentPathList.add(root.val);
            if(root.left==null&&root.right==null){
                if(currentSum==requireSum){
                    PathsList.add(currentPathList);
                }
                currentPathList.remove(currentPathList.size()-1);
            }
            preOrder(root.left,currentSum);
            preOrder(root.right,currentSum);
        }
    }
}
