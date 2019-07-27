class Solution {
public:
    int findMin(vector<int>& nums) {
        int left=0,right=nums.size()-1,mid;
        while(left<=right)
        {
            mid=(left+right)/2;
            if(nums[mid]>nums[mid+1])
            {
                mid=mid+1;
                break;
            }
            else if(nums[mid]<nums[mid-1])
                break;
            
            // mid满足nums[mid-1]<nums[mid]<nums[mid+1].即mid处于升序段中,此时需判断key位于mid的左方还是右方
            else 
            {
                if(nums[0]<nums[mid-1]) // key位于mid的右方
                    right=mid+1;
                else 
                    left=mid-1; // key位于mid的左方
            }
        }
        return nums[mid];
    }
};
