/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {

    // “啥循环数组呀？直接数组延长一倍再正向找”

    nums=[...nums,...nums]
    
    let {length:n}=nums
    let res=Array(n).fill(0)


    // 构建栈
    let stack=[]    
    for(let i=0;i<n;i++){
        // 比较历史元素，看是否有机会出栈（出栈就意味着找到了离该栈内元素最近的 bigger）
        while(stack.length>0&&nums[stack[stack.length-1]]<nums[i]){
            let index=stack.pop()
            res[index]=i-index
        }
        stack.push(i)
    }

    // 栈内剩余元素，右边再也找不到 bigger 了
    while(stack.length>0){
        res[stack.pop()]=-1
    }

    return res.filter((item,index)=>index<n/2).map((item,index)=>item===-1?item:nums[index+item])
};
