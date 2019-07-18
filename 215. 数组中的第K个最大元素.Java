//排序
class Solution {
    public int findKthLargest(int[] nums, int k) {
        int len=nums.length;
        Arrays.sort(nums);
        return nums[len-k];
    }
}
