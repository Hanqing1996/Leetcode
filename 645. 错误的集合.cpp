
// 时间复杂度：O(n) 空间复杂度：O(n)
class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        int n=nums.size();
        set<int> se;
        vector<int> res;
        int Hash[10001];
        int numsSum=0,seSum=0;
        for(int i=0;i<n;i++){
            se.insert(nums[i]);
            numsSum+=nums[i];
        }
        
        // 找重复出现的数字
        for(auto it = se.begin(); it != se.end(); it++){
            seSum+=*it;
        }
        res.push_back(numsSum-seSum);
        
        // 找缺失的数字
        for(int i=1;i<=n;i++){
            if(se.find(i)== se.end())
                res.push_back(i);
        }

        return res;
    }
};

// 时间复杂度：O(n) 空间复杂度：O(1)
class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        
        int repeat,lost,wrongSum=0,trueSum=0,n=nums.size();

        // 修改0123与1234的映射关系来判断是否重复
        for(int i=0;i<n;i++){
            if(nums[abs(nums[i])-1]>0)
                nums[abs(nums[i])-1]=-nums[abs(nums[i])-1];
            else
                repeat=abs(nums[i]);
            wrongSum+=abs(nums[i]);
        }
        
        trueSum=(1+n)*n/2;
        
        // 由repeat可以求出lost
        lost=repeat+trueSum-wrongSum;
        
        vector<int> res;
        res.push_back(repeat);
        res.push_back(lost);
        
        return res; 
    }
};
