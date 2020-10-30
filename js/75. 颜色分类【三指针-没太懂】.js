var sortColors = function(nums) {
    let p0=0
    let p1=0
    let p2=nums.length-1
    while(p1<=p2)//所有元素都遍历完了。
    {
        if(nums[p1]==0){
            
            swap(nums,p1,p0);//等于0，交换到最前面。换回来的元素（即之前p0所指元素）不是0就是1，不可能是2
            p1++
            p0++
        }
        else if(nums[p1]==2){
            swap(nums,p1,p2);//等于2，交换到最后面。
            p2--
        }
        else 
            p1++;
    }    
    return nums
};


let swap = (arr, i , j) => {
    if(i===j) return
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
