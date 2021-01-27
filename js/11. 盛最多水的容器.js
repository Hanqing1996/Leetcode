// 对撞双指针,一开始两个指针一个指向开头一个指向结尾。
// 每次判断height[left]和height[right]大小，由于当前left和right所围成的面积是由min{heigh[left],height[right]}*(right-left+1)决定的。
// 而接下去 left 和 right 的靠近只会让底变的更小，因此面积扩大的唯一可能是接下去指针所指的高度>之前的较低边（即更加充分地利用之前的较高边）
// 所以移动指针的依据是看当前哪边更低，低的一方移动
var maxArea = function(height) {
    let left=0,right=height.length-1
    let res=0
    while(left<right){
        let currentSize=Math.min(height[left],height[right])*(right-left)
        res=Math.max(res,currentSize)

        if(height[left]<height[right])
            left++
        else
            right--
    }
    return res
};
