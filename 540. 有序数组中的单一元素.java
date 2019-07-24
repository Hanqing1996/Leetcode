class Solution {
public:
    int singleNonDuplicate(vector<int>& nums) {
        int left=0,right=nums.size()-1,mid=0,sum;// 注意nums.length必然为奇数
        while(left<=right)
        {
            // mid可能为奇数,可能为偶数
            mid=(left+right)/2;
            
            // 偶数处理
            if(mid%2==0)
            {
                if(nums[mid]==nums[mid-1]) // 左等,说明key在左边
                    right=mid-2;   
                else if(nums[mid]==nums[mid+1]) // 右等,说明key在右边
                    left=mid+2;
                else
                    break; //找到key
            }
            
            // 奇数处理
            if(mid%2==1)
            {
                if(nums[mid]==nums[mid-1]) // 左等,说明key在右边
                    left=mid+1;
                else if(nums[mid]==nums[mid+1]) // 右等,说明key在左边
                    right=mid-1;
                else
                    break;
            }
        }
         return nums[mid];
    }
};
