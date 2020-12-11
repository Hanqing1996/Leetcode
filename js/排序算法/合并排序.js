// 这里的合并有序数组不要用原地方法
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

function mergeSort(arr){
    
    let mid=Math.floor(arr.length/2)

    let leftPart=arr.slice(0,mid)
    let rightPart=arr.slice(mid)

    let leftArray=leftPart.length<=1?leftPart:mergeSort(leftPart)
    let rightArray=rightPart.length<=1?rightPart:mergeSort(rightPart)
    return combine(leftArray,rightArray)
}

let arr=[3,2,5,8,7,4,1]
let res=mergeSort(arr)
console.log(res)
