class Solution {
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> res;
        int len1=p.length(),len2=s.length();
        int left=0,right=len1-1;
        int Hash[26];
        memset(Hash,0,sizeof(Hash));
        for(int i=0;i<len1;i++){
            Hash[p[i]-'a']++;
        }
        while(right<len2){
            // 复制Hash
            int temp[26];
            memset(temp,0,sizeof(temp));
            for(int i=0;i<26;i++){
                temp[i]=Hash[i];
            }
            int count=0;
            for(int i=left;i<=right;i++){
                if(temp[s[i]-'a']==0) break;
                temp[s[i]-'a']--;
                count++;
            }
            if(count==len1) res.push_back(left);
            left++;
            right++;
        }
        return res;
    }
};
