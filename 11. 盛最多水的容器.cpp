// 双指针,p1为左,p2为右
class Solution {
public:
    int maxArea(vector<int>& height) {
        int len=height.size();
        int p1=0,p2=len-1;
        int currentMaxArea=-1;

        // 每次只让较短侧指针移动
        while(p1<p2){
            int currentArea=min(height[p1],height[p2])*(p2-p1);
            currentMaxArea=max(currentMaxArea,currentArea);

            if(height[p1]<height[p2]) p1++;
            else p2--; 
        }
        return currentMaxArea;
    }
};
