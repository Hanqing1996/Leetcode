/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */


/**
 * random 指向一个节点(对象)，不要被题目的示例误导!
 * 本质上就是求一个对象的深拷贝(应该把整个链表看成一个对象)
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

    const mapping=new Map()
    // 在整个 deepClone 过程中，先全部建立好 next 关系，再从头建立 random 关系
    const deepClone=function(node){
        if(node===null)
            return node
        /**
         * mapping 是专门为 random 设置的，因为 建立 random 关系必须在已有的，建立了 next 关系的拷贝链表上。
         * 即 random 指向的，必须是之前已经建立过的拷贝链表节点（这与 next 不同，next 的建立必然是连接新节点）     
         */
        if(mapping.get(node)) 
            return mapping.get(node)    

        let res=new Node()
        mapping.set(node,res)
        res.val=node.val
        res.next=deepClone(node.next)
        res.random=deepClone(node.random)
        return res
    }

    let res=deepClone(head)
    return res
};
