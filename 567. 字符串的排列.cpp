class Solution {
public:
    bool checkInclusion(string s1, string s2) {

        int Hash[26];
        memset(Hash,0,sizeof(Hash));
        int len1=s1.length(),len2=s2.length();
        for(int i=0;i<len1;i++){
            Hash[s1[i]-'a']++;
        }
        if(s2.length()<len1) return false;
        int left=0,right=len1-1;
        while(right<len2){
            // 复制Hash
            int temp[26];
            memset(temp,0,sizeof(temp));
            for(int i=0;i<26;i++){
                temp[i]=Hash[i];
            }
            // 判断left到right的s2子串是否为s1的排列之一,注意直接sort后判断两个数组是否相同会超时
            int count=0;
            for(int i=left;i<=right;i++){
                if(temp[s2[i]-'a']==0) break;
                temp[s2[i]-'a']--;
                count++;
            }
            if(count==len1) return true;
            left++;
            right++;
        }
        return false;
    }
};
