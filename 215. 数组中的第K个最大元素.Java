//排序
class Solution {
    public int findKthLargest(int[] nums, int k) {
        int len=nums.length;
        Arrays.sort(nums);
        return nums[len-k];
    }
}

class Solution {
public int findKthLargest(int[] nums, int k) {
    /*
    *一个简单的道理: 
    *第K个最大元素=第n-k+1个最小元素
    *因此只需利用优先队列"吐"出n-k个元素,再吐一次一定是第第n-k+1个最小元素
    *
    */
    
    PriorityQueue<Integer> pq = new PriorityQueue<>(); // 小顶堆
    for (int val : nums) {
        pq.add(val);
        if (pq.size() > k)  // 维护堆的大小为 K
            pq.poll();
    }
    return pq.peek();
}
}
