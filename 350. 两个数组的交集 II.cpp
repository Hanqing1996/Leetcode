/*
 * 用Hash+set
 */
class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        int Hash1[10010],Hash2[10010];
        set<int> s1,s2;
        vector<int> res;
        for(int i=0;i<nums1.size();i++)
        {
            Hash1[nums1[i]]++;
            s1.insert(nums1[i]);
        }
        for(int i=0;i<nums2.size();i++)
        {
            Hash2[nums2[i]]++;
            s2.insert(nums2[i]);
        }
        for(auto it=s1.begin();it!=s1.end();it++)
        {
            if(s2.find(*it)!=s2.end())
            {
                for(int i=0;i<min(Hash1[*it],Hash2[*it]);i++)
                {
                    res.push_back(*it);
                }
            }
        }
        return res;
    }
};
