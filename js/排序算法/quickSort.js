const arr = [30, 32, 6, 24, 37, 32, 45, 21, 38, 23, 47];

// 好粗暴，不过我喜欢
function quickSort(arr){

  let pivot = arr[0];
  let left = [];
  let right = [];
  for(let i = 1; i < arr.length; i++){
    if(arr[i] > pivot){
      right.push(arr[i]);
    }else{
      left.push(arr[i]);
    }
  }

  let leftPart=left.length<=1?left:quickSort(left)
  let rightPart=right.length<=1?right:quickSort(right)

  return leftPart.concat([temp], rightPart);
}

console.log(quickSort(arr));



// 改进版
const arr = [30, 32, 6, 24, 37, 32, 45, 21, 38, 23, 47];

function quickSort(arr){

  let pivot = arr[0];

  let len=arr.length  
  let p=1

  // left 和 right 的生成改用双指针实现
  for(let q=1;q<len;q++){
      if(arr[q]<pivot&&q!=p){
        swap(q,p,arr)
        p++
      }
  }
  let left=arr.slice(1,p)
  let right=arr.slice(p)

  let leftPart=left.length<=1?left:quickSort(left)
  let rightPart=right.length<=1?right:quickSort(right)

  return leftPart.concat([pivot], rightPart);
}

function swap(a,b,arr){
    arr[a]+=arr[b]
    arr[b]=arr[a]-arr[b]
    arr[a]=arr[a]-arr[b]
}

quickSort(arr)


