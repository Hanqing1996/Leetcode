class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        //利用二分查找符合要求的index1,index2;
        int index1=0,index2=numbers.size()-1;
        while(index1<index2)
        {
            if(numbers[index1]+numbers[index2]==target)
                break;
            else if(numbers[index1]+numbers[index2]>target)
                index2--;
            else
                index1++;   
        }
        vector<int> res;
        res.push_back(index1+1);
        res.push_back(index2+1);
        return res;
    }
};
