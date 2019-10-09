/**
 * 子字符串中的所有0和所有1都是组合在一起的：一串0加上一串1 or 一串1加上一串0；所以0110不符合要求 
 * 先统计连续的0和1分别有多少个，如：111100011000，得到4323；在4323中的任意相邻两个数字，取小的一个加起来，就是3+2+2 = 7.
 */
class Solution {
public:
    int countBinarySubstrings(string s) {
        
        vector<int> nums;
        
        if(s=="")
            return 0;
        
        int num=1;
        for(int i=1;i<s.size();i++){
            if( s[i]==s[i-1])
                num++;
            else{
                nums.push_back(num);
                num=1;
            }
        }
        nums.push_back(num);
        
        int sum=0;
        for(int i=1;i<nums.size();i++){
            sum+=min(nums[i],nums[i-1]);
        }
        
        return sum;
    }
};
