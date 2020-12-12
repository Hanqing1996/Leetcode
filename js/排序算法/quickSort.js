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
