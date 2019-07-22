class Solution {
    
    // 要找的元素在数组中下标必然为偶数
    public int singleNonDuplicate(int[] nums) {
        int left=0,right=nums.length-1,mid=0,sum;//注意nums.length必然为奇数
        while(left<right)
        {
            sum=left+right;
            if(sum%2==0)
                mid=sum/2;
            else
            {
                if(nums[mid]==nums[mid-1])
                    mid=mid+1;  
                else if(nums[mid]==nums[mid+1])
                    mid=mid-1;
                else
                    break;
            }
                
            if(nums[mid]==nums[mid-1])
                right=mid-2;
            else if(nums[mid]==nums[mid+1])
                left=mid+2;
            else
                break;
            
        }
        return nums[mid];
    }
}
