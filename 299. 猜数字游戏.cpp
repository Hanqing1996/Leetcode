class Solution {
public:
    string getHint(string secret, string guess) {
        
        int Hash[10];
        for(int i=0;i<10;i++)
            Hash[i]=0;
        
        for(int i=0;i<secret.size();i++){
            if(secret[i]!=guess[i])
                Hash[secret[i]-'0']++;
        }
        
        
        int countA=0,countB=0;
        for(int i=0;i<guess.size();i++){
            if(guess[i]==secret[i])
                countA++;
            else if(Hash[guess[i]-'0']>0){
                Hash[guess[i]-'0']--;
                countB++;
            }
        }
        
        return to_string(countA)+"A"+to_string(countB)+"B";
    }
};
