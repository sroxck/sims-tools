/**
 * 遍历给定数组,返回给定函数中返回真值的第一个元素的索引,未找到返回-1
 * @param list 
 * @param fn 
 * @returns 
 */
export default function findIndex<T>(list: T[], fn: Function):number {
  let index = -1;
  while (++index < list.length) {
    const result  = fn(list[index],index)
    if(result){
      return index
    }
  }
  return index
}
