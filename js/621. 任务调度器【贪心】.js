/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

/**
 * 假设所有任务中数里最多的任务A有m个，那么最短时间必然大于等于 (m-1)*(n+1)+1。也就是说数量多的任务决定了总时间的下限。
 * 
 * 对于那些数量较多的任务，我们必须尽量早安排。因为如果数量多的任务被最迟安排，那么轮到它们执行时，由于数量少的任务都已被执行完，此时数量多任务执行的间期CPU就只能等待。
 * 比如有 5 种任务 A, B, C, D, E，且它们分别有 6, 1, 1, 1, 1 个时，假设冷却时间 n = 2。
 * 如果我们把数量最多的A放到最迟安排:BCDEA_ _ A_ _ A_ _A_ _ A_ _ A,总耗时20个时间单位
 * 如果我们把数量最多的A放到最早安排:ABCADEA_ _A_ _ A_ _ A,总耗时16个时间单位
 * 
 * 所以我们必须尊循“目前数量最多的任务，应该尽早安排执行”，即按照 https://leetcode-cn.com/problems/task-scheduler/solution/ren-wu-diao-du-qi-by-leetcode/ 所言：
 * 1.我们规定 n + 1 个任务为一轮
 * 2.在每一轮中，我们将当前的任务按照它们剩余的次数降序排序，并选择剩余次数最多的 n + 1 个任务依次执行。注意每轮执行的任务不重复
 * 3.如果任务的种类 t 少于 n + 1 个（即某些任务已全部被执行完毕），就只选择全部的 t 种任务
 */
var leastInterval = function(tasks, n) {
    let cost=0
    let Hash={}
    tasks.map(task=>{
        Hash[task]=Hash[task]===undefined?1:Hash[task]+1
    })
    let types=Object.keys(Hash)
    let need=0

    while(types.length>0){
        
        // 确定本轮要执行的任务总数
        need=types.length<n+1?types.length:n+1
        // 确定具体要执行哪几种任务
        toImplement=types.sort((a,b)=>Hash[b]-Hash[a]).slice(0,need)

        // 检测是不是最后一轮（耗时小于 n+1）
        let lastCost=0
        for(let i=0;i<toImplement.length;i++){

            Hash[toImplement[i]]--
            if(Hash[toImplement[i]]===0){
                delete Hash[toImplement[i]]
                lastCost++
            }
        }
        // 更新待完成任务种类列表
        types=Object.keys(Hash)
        // 确定本轮耗时
        currentCost=types.length===0?lastCost:n+1
        // 耗时累计
        cost+=currentCost
    }
    return cost
};
