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
 * 思路2：二分查找，复杂度为O(logn)
 */
class Solution {
public:
    int peakIndexInMountainArray(vector<int>& A) {
        int low=0,high=A.size()-1,mid; 
        while(low<=high)
        {
            mid=(low+high)/2;
            //注意A数组只有一个元素满足相邻元素皆小于它，即所求关键字
            if(A[mid]>A[mid-1]&&A[mid]<A[mid+1])
                break;
            else if(A[mid]<A[mid-1])
                high=mid;
            else 
                low=mid;
        }
        return mid;
    }
};
