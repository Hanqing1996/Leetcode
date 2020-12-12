// 时间复杂度 O(m+n),空间复杂度 O(m+n),从前往后
function combine(arr1,arr2){
    let result=[]

    while(arr1.length>0&&arr2.length>0){
        if(arr1[0]>=arr2[0]){
            result.push(arr2.shift())
        }else{
            result.push(arr1.shift())
        }
    }
    while(arr1.length>0)
        result.push(arr1.shift())
    while(arr2.length>0)
        result.push(arr2.shift())    
    return result    
}

let res=combine([2,6,8,10],[1,3,5,7])
console.log(res)


// 原地, 时间复杂度 O(m+n),空间复杂度 O(1)，从后往前
function combine(arr1,arr2){

    m--
    n--
    let m=arr1.length,n=arr2.length
    let position=m+n-1
    while(m>0&&n>0){
        if(arr1[m]>=arr2[n]){
            arr1[position--]=arr1[m--]
        }else{
            arr1[position--]=arr2[n--]
        }
    }
    // 若 m 有剩余，说明为 arr1=[2,3,4],arr2=[5],此时得到 arr1=[2,3,4,5] 已有序，直接返回 arr1 即可

    // 若 n 有剩余，说明为 arr1=[3,4,5],arr2=[1,2],此时得到 arr1=[3,4,5] 剩余的 arr2 一定都比原先的 arr1[0] 小
    // 又因为 arr2 有序，所以直接在 arr1 前面接上着最小的连续一段即可
    while(n>0)
        arr1[position--]=arr2[n--]
    return arr1
}
