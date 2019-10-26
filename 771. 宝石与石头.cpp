class Solution {
public:
    int numJewelsInStones(string J, string S) {
        int Hash[58]={0};
        int count=0;
        for(int i=0;i<J.size();i++){
            Hash[J[i]-'A']++;
        }
        for(int i=0;i<S.size();i++){
            if(Hash[S[i]-'A']==1)
                count++;
        }
        return count;
    }
};
