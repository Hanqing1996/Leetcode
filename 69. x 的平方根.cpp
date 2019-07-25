class Solution {
public:
    int mySqrt(int x) {
        if(x==1)
            return 1;
        int left=1,right=x/2,mid;
        while(left<=right)
        {
            mid=(left+right)/2;
            if(mid*mid==x)
                break;
            else if(mid*mid<x)
            {
                if((mid+1)*(mid+1)==x)
                {
                    mid=mid+1;
                    break;
                }
                else if((mid+1)*(mid+1)<x)
                    left=mid+1;
                else
                    break;
            }
            else{
                if((mid-1)*(mid-1)==x)
                {
                    mid=mid-1;
                    break;
                }
                else if((mid-1)*(mid-1)>x)
                    right=mid-1;
                else
                {
                    mid=mid-1;
                    break;
                }
            }
        }
        return mid;
    }
};
