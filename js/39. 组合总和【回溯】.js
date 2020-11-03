const combinationSum = (candidates, target) => {
    let ans=[]
    let res = [];
    const dfs = (index, count, sum) => {
      if (sum >= target) {
        if (sum == target) {
          res.push([...ans.slice(0,count)]);
        }
        return; 
      }
      for (let i = index; i < candidates.length; i++) {
        if(sum+candidates[i]<=target){
            ans[count]=candidates[i]         
            dfs(i, count+1, sum + candidates[i]);
        }
      }
    };
    dfs(0, 0, 0);
    return res;
  };

 // 横向:[2->2->2->2]的递进是 DFS不断深入到下层+ 过滤 index 之前的数字（但是不像 46 题那样设置了 visited 过滤）
 // 纵向:[2,2,2->3 ...]的递进是DFS回退到上层（DFS(2)->DFS(1)）后继续之前的for循环，for 循环遍历的结果（DFS 回退后 i++,所以nums由2遍历到3） 
