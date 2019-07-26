// Forward declaration of isBadVersion API.
bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        int left=1,right=n,mid;
        while(left<=right)
        {
            mid=left+(right-left)/2;
            if(isBadVersion(mid))
            {
                if(isBadVersion(mid-1))
                    right=mid-1;
                else
                    break;
            }
            else{
                if(isBadVersion(mid+1))
                {
                    mid=mid+1;
                    break;
                }
                else
                    left=mid+2;
            }
        }
        return mid;
    }
};
