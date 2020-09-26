/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

    // 建立 num1 位置映射
    const n2=nums2.length,n1=nums1.length
    let middle=Array(10).fill(-1)
    nums2.map((item,index)=>{
        middle[item]=index
    })

    let position=Array(n1).fill(-1)
    position=position.map((item,index)=>middle[nums1[index]])
    
    let {length:n}=nums2
    let res=Array(n).fill(-1)

    // 构建栈
    let stack=[]    
    for(let i=0;i<n;i++){
        // 比较历史元素，看是否有机会出栈（出栈就意味着找到了离该栈内元素最近的 bigger）
        while(stack.length>0&&nums2[stack[stack.length-1]]<nums2[i]){
            let index=stack.pop()
            res[index]=i-index
        }
        stack.push(i)
    }

    // 栈内剩余元素，右边再也找不到 bigger 了
    while(stack.length>0){
        res[stack.pop()]=-1
    }

    position=position.map(item=> res[item]===-1?-1:nums2[item+res[item]]  )
    return position

};
