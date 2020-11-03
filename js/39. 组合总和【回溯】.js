const combinationSum = (candidates, target) => {
    const res = [];
    const dfs = (start, temp, sum) => {
      if (sum >= target) {
        if (sum == target) {
          res.push([...temp]); // temp的拷贝
        }
        return;     // 结束当前递归
      }
      for (let i = start; i < candidates.length; i++) { // 枚举出选择，从start开始
        // 无论是背包还是回溯，剪枝条件是一样的
        if(sum+candidates[i]<=target){
            temp.push(candidates[i]);           // 加入“部分解”
            dfs(i, temp, sum + candidates[i]);  // 往下继续选择，同时sum累加上当前数字
            temp.pop();                         // 撤销选择
        }
      }
    };
    dfs(0, [], 0);
    return res;
  };
