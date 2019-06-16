class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        set<char> s;
        vector<char> nums;
        for(int i=0;i<letters.size();i++)
        {
            s.insert(letters[i]);
        }
        for(auto it=s.begin();it!=s.end();it++)
        {
            nums.push_back(*it);
        }
        int low=0,high=nums.size()-1,mid;
        while(low<=high)
        {
            mid=(low+high)/2;
            if(nums[mid]==target)
                break;
            else if(nums[mid]>target)
                high=mid-1;
            else
                low=mid+1;
        }
        char res;
        if(low>high)
           res=(low==nums.size())?nums[0]:nums[low];
        else
           res=(mid==nums.size()-1)?nums[0]:nums[mid+1];
        return res;
    }
};
