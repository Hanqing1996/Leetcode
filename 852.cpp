/*
 * 思路1：直接排序，最大元素下标即为答案，复杂度为O(n)
 */
class Solution {
public:
    int peakIndexInMountainArray(vector<int>& A) {
        int Max=-1,res;
        for(int i=0;i<A.size();i++)
        {
            if(A[i]>Max) 
            {
                Max=A[i];
                res=i;
            }
        }
        return res;
    }
};

/*
 * 思路2：直接排序，最大元素下标即为答案，复杂度为O(n)
 */
class Solution {
public:
    int peakIndexInMountainArray(vector<int>& A) {
        int Max=-1,res;
        for(int i=0;i<A.size();i++)
        {
            if(A[i]>Max) 
            {
                Max=A[i];
                res=i;
            }
        }
        return res;
    }
};
