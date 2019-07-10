class Solution {
public:
    bool validPalindrome(string s) {
        int index1=0,index2=s.length()-1,count=1;
        while(index1<index2)
        {
            if(s[index1]==s[index2])
            {
                index1++;
                index2--;
            }
            else if(s[index1+1]==s[index2]&&count==1)
            {
                index1++;
                count=0;        
            }
            else if(s[index2-1]==s[index1]&&count==1)
            {
                index2--;
                count=0;
            }
            else
                return false;
        }
        return true;
    }
};
