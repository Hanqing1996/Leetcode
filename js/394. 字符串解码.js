/**
 * @param {string} s
 * @return {string}
 */

// s中不含数字的时候，也就是s处理完毕的时候
var decodeString = function(s) {
  let res=s.replace(/(\d+)\[(\w+)\]/g,(_, a, b) =>b.repeat(Number(a)))

  // 检测 s 中是否存在数字
  let ifNumberRemain=/\d+/.test(res)
  return ifNumberRemain?decodeString(res):res
};
