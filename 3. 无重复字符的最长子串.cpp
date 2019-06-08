class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int dp[10010];
        dp[0]=1;
        string cur="";
        cur+=s[0];
        int res=1;
        for(int i=1;i<s.length();i++)
        {
            if(cur.find(s[i])==-1) dp[i]=1;
            else{
                dp[i]=dp[i-1]+1;
                cur="";
            }
            cur+=s[i];
            res=max(res,dp[i]);
        }
        return res;
    }
};
