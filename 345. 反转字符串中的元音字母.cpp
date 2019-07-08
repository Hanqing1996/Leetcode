class Solution {
public:
    string reverseVowels(string s) {
        int Hash[130];
        Hash['a']=1;Hash['e']=1;Hash['i']=1;Hash['o']=1;Hash['u']=1;
        Hash['A']=1;Hash['E']=1;Hash['I']=1;Hash['O']=1;Hash['U']=1;
        int len=s.length();
        int index1=0,index2=len-1;
        while(index1<index2)
        {
            if(Hash[s[index1]]!=1)
                index1++;
            if(Hash[s[index2]]!=1)
                index2--;
            if(Hash[s[index1]]==1&&Hash[s[index2]]==1) 
            {
                char temp=s[index1];
                s[index1]=s[index2];
                s[index2]=temp;
            }
        }
        return s;
    }
};
