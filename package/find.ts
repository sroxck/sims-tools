/**
 * 遍历给定数组,返回给定函数返回真值的集合
 * @param list 
 * @param fn 
 * @returns 
 */
export default function find<T>(list: T[], fn: Function): T[] {
  let index = -1;
  let res = []
  while (++index < list.length) {
    const result  = fn(list[index],index)
    if(result){
      res.push(list[index])
    }
  }
  return res
}
