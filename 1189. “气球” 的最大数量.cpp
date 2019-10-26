class Solution {
public:
    int maxNumberOfBalloons(string text) {
        int Hash[26]={0};
        string target="balloon";
        
        for(int i=0;i<text.size();i++){
            Hash[text[i]-'a']++;
        }
        
        Hash['l'-'a']=Hash['l'-'a']/2;
        Hash['o'-'a']=Hash['o'-'a']/2;
        
        int minLen=10000;
        for(int i=0;i<target.size();i++){
            minLen=min(minLen,Hash[target[i]-'a']);
        }
        
        if(minLen==10000)
            return 0;
        return minLen;
    }
};
