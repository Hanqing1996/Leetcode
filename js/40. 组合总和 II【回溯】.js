const combinationSum2 = (candidates, target) => {
    candidates=candidates.sort((a,b)=>a-b)

    let visited=Array(candidates.length).fill(false) 
    let ans=[]
    let res = [];
    const dfs = (start, count, sum) => {
      if (sum >= target) {
        if (sum == target) {
          res.push([...ans.slice(0,count)]);
        }
        return;    
      }
      for (let i = start; i < candidates.length; i++) { 


        if(i>0&&candidates[i]===candidates[i-1]&&!visited[i-1]&&!visited[i])
            continue

        if(sum+candidates[i]<=target){
            ans[count]=candidates[i]
            visited[i]=true
            dfs(i+1, count+1, sum + candidates[i]);      
            visited[i]=false                  
        }
      }
    };
    dfs(0, 0, 0);
    return res;
  };
