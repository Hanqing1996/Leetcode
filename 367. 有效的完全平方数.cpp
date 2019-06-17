class Solution {
public:
    bool isPerfectSquare(int num) {
        if(num==1)
            return true;
        vector<int> nums;
        int len=num/2;
        for(int i=1;i<=len;i++)
        {
            nums.push_back(i);
        }
        int low=0,high=len-1,mid;
        while(low<=high)
        {
            mid=(low+high)/2;
            if(nums[mid]*nums[mid]==num)
                break;
            else if(nums[mid]*nums[mid]>num)
                high=mid-1;
            else
                low=mid+1;
        }
        if(low>high)
            return false;
        else
            return true;
    }
};
