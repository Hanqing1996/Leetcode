class Solution {
public:
    bool judgeSquareSum(int c) {
        int a=0,b=sqrt(c); // a的初始值为0
        bool flag=false;
        while(a<b)
        {
            if(a*a+b*b==c)
            {
                flag=true;
                break;
            }
            else if(a*a+b*b<c)
                a++;
            else
                b--;
        }
        return flag;
    }
};
