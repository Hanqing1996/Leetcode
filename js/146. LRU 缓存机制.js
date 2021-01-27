class DoubleLinkedListNode{
    constructor(value){
        this.value=value
        this.pre=null
        this.next=null
    }
}

// 因为缓存区域要频繁将操作的{key:value}节点置顶，所以缓存区用链表表示。
// 因为要频繁移动节点至链表头部，所以使用双向链表。
// 因为要记录 Node 以便删除和移动，所以需要 {key:Node}的Hash表
var LRUCache = function(capacity) {
    this.capacity=capacity
    this.key2node={}
    this.dummyHead=new DoubleLinkedListNode()
    // 记录尾节点，以便后续删除最后一个节点
    this.dummyTail=new DoubleLinkedListNode()
    this.dummyHead.next=this.dummyTail
    this.dummyTail.pre=this.dummyHead
};

/**
 * if 存在 key
 *    将对应节点移至头部
 *    返回对应值
 * else
 *    返回-1   
 */
LRUCache.prototype.get = function(key) {
    if(this.key2node[key]){
        
        this._addToHead(this._removeNode(this.key2node[key]))
        return this.key2node[key].value
    }else
        return -1

};

/**
 * if 存在 key 
 *    修改其值
 *    将对应节点移至头部
 * else
 *    if 缓存已满
 *        删除最后一个节点  
 *        删除它在哈希表中的映射
 *    新建含 value 节点
 *    在哈希表中增加映射
 *    将新节点移至头部
 */
LRUCache.prototype.put = function(key, value) {
    if(this.key2node[key]){
        this.key2node[key].value=value
        this._removeNode(this._addToHead(this.key2node[key]))
        
    }else{
        if(this._isFull()){
            this._removeNode(this.dummyTail.pre)
            delete this.key2node[key]
        }
        let node=new DoubleLinkedListNode(value)
        this.key2node[key]=node
        this._addToHead(node)
    }
        
};

LRUCache.prototype._removeNode=function(node){
    // 将节点从原先位置移除
    let toRemove=node
    let preNode=toRemove.pre
    let nextNode=toRemove.next
    toRemove.next=null
    toRemove.pre=null

    return node
}

LRUCache.prototype._addToHead=function(node){

    const preHead=this.dummyHead.next
    preHead.pre=node
    node.next=preHead

    this.dummyHead.next=node
    node.pre=this.dummyHead
}

LRUCache.prototype._isFull=function(){
    return Object.keys(this.key2node).length===this.capacity
}



