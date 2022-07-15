/**
 * 将给定数组分割为指定位数的二维数组
 * @param array 要分割的数组
 * @param size 分割的位数
 * @returns T[][]
 */
function chunk<T>(array: T[], size: number = 1):T[][] {
  // 先做错误处理,传入的数组为null 或者size是负数,或者size不是整数,返回空数组
  const length = array == null ? 0 : array.length;
  if (!length || size < 1 || !Number.isInteger(size)) {
    return [];
  }
  // 假设length是 4 size 是 3  3个一组 取值为 [[1,3,4],[2]]
  // 需要创建 length / size的数组,除不尽向上取整
  const result = new Array(Math.ceil(length / size));
  // 
  let [index,resIndex] = [0,0]
  while(index<length){
    // slice 从 start 到end 提取数组 返回新数组,如果end大于数组的长度,会提取到数组的末尾
    result[resIndex++] = array.slice(index, (index += size))
    // resIndex++ : 每次循环让索引+1
  }
  return result;
}
export default chunk