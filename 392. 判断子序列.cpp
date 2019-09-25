class Solution {
public:
    bool isSubsequence(string s, string t) {
        
        int len=s.size();
        int count=0;
        
        // 保证了按序查找
        for(int i=0;i<t.size();i++){
            if(s[count]==t[i])
                count++;
        }
        
        if(count==len)
            return true;
        return false;
    }
};
