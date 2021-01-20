/**
 * @param {number[]} postorder
 * @return {boolean}
 */

// 后序:左右根

// 找到序列中比最右侧结点值大的那个结点,以此划分左右子树区间
var verifyPostorder = function(postorder) {
    let res=true
    const traverse=function(order){

        let root=order.pop()
        let len=order.length

        // 查找第一个大于root的节点，作为左右子树分界
        let rightIndex
        for(let i=0;i<len;i++){
            if(order[i]>root){
                rightIndex=i
                break
            }
        }

        // 没有右子树
        rightIndex===undefined&&(rightIndex=len)

        // 确定左右子树区间
        let leftPart=order.slice(0,rightIndex)
        let rightPart=order.slice(rightIndex)

        // 不必在本轮检查左子树，因为之前的检索已经保证左子树所有节点小于 root

        // 右子树需要检查,检查是否有小于root的节点存在
        if(rightPart.length>1&&rightPart.some(node=>node<root)){
            res=false
        }

        // 已经确认不是二叉搜索树，不必继续检索
        if(!res)
            return

        // 检索左、右子树
        leftPart.length>1&&traverse(leftPart)
        rightPart.length>1&&traverse(rightPart)

    }   
    traverse(postorder)
    return res
}
