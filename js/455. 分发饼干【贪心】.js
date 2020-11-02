/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

/**
 * 目标：尽量让更多的孩子吃到饼干。
 * 思路：没想到好思路，只能一步步模拟了，从胃口最小的孩子开始找能不能找到满足他胃口的饼干
 * 
 */
var findContentChildren = function(g, s) {
    g=g.sort((a,b)=>a-b)
    s=s.sort((a,b)=>a-b)

    let amount=0
    let left=0
    for(let i=0;i<g.length;i++){
        let child=g[i]
        let find=false
        for(let j=left;j<s.length;j++){
            if(s[j]>=child){
                find=true
                left=j+1
                break
            }
        }
        if(find){
            amount++
        }else{
            // 剩下来孩子，胃口都一定不小于现在的孩子,现在的孩子喂不饱，剩下来的孩子也不可能喂饱
            return amount
        }

    }
    return amount

};
