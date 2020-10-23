/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


// 倒排即可，思路参考 https://leetcode-cn.com/problems/merge-sorted-array/solution/jiang-qing-chu-mei-yi-xing-dai-ma-zui-hao-li-jie-d/
var merge = function(nums1, m, nums2, n) {

    let position=m+n-1
    m--
    n--
    while(m>=0&&n>=0){
        if(nums1[m]>nums2[n]){
            nums1[position--]=nums1[m--]
        }else{
            nums1[position--]=nums2[n--]
        }
    }
    /**
     * nums1 被消耗光，说明剩余的 nums2 一定都比原先的 nums1[0] 小.
     * 又因为 nums2 有序，所以直接在nums1前面接上着最小的连续一段即可
     */
    while (n >= 0) {
        nums1[position--] = nums2[n--];
    }

};
