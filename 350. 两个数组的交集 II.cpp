class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        map<int,int> Hash;
        int len1=nums1.size();
        int len2=nums2.size();
        for(int i=0;i<len2;i++){
            Hash[nums2[i]]++;
        }
        vector<int> res;
        for(int i=0;i<len1;i++){
            // Hash[nums1[i]]>0,说明nums1[i]一定重复了
            if(Hash[nums1[i]]>0){
                res.push_back(nums1[i]);
                // 消耗掉一个nums2里面的一个重复元素
                Hash[nums1[i]]--;
            }
        }
        return res;
    }
};
