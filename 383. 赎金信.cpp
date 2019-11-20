class Solution {
public:
    // magazine中的每个字符只能用一次
    bool canConstruct(string ransomNote, string magazine) {
        // 统计magazine中可供裁剪的字符次数
        int Hash[26];
        memset(Hash,0,sizeof(Hash));
        for(int i=0;i<magazine.length();i++){
            Hash[magazine[i]-'a']++;
        }  
        for(int i=0;i<ransomNote.length();i++){
            // 不够了
            if(Hash[ransomNote[i]-'a']==0){
                return false;
            }
            Hash[ransomNote[i]-'a']--;
        }
        return true;
    }
};
