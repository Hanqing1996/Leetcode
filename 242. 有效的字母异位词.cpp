class Solution {
public:
    bool isAnagram(string s, string t) {
        
        int dp[26]={0};
        
        for(int i=0;i<s.size();i++){
            dp[s[i]-'a']++;
        }
        
        for(int i=0;i<t.size();i++){
            dp[t[i]-'a']--;
        }
        
        for(int i=0;i<26;i++){
            if(dp[i]!=0)
                return false;
        }
        return true;
    }
};
