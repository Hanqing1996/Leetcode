class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        
        //事先存储nums1的m个元素是有必要的，比如num1=[9,10],num2=[1,2,3,4]时
        vector<int> nums3=nums1;
        
        int index1=0,index2=0,count=0;
        while(index1<m&&index2<n)
        {
            if(nums3[index1]<nums2[index1]){
                nums1[count++]=nums3[index1];
                index1++;
                count++;
            }
            else{
                nums1[count++]=nums2[index2];
                index2++;
            }
        }
        if(index1<m){
            for(int i=count;i<m+n;i++)
            {
                nums1[i]=nums3[i-count];
            }
        }
        else{
            for(int i=count;i<m+n;i++)
            {
                nums1[i]=nums2[i-count];
            }
        }
        
    }
};


// 更飘逸的写法
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int p = m-- + n-- - 1;
        while (m >= 0 && n >= 0) {
            nums1[p--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
        }
        
        while (n >= 0) {
            nums1[p--] = nums2[n--];
        }
    }
};
