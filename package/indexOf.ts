import eq from "./eq";
/**
 * 在数组中查找给定元素,返回其对应的索引,未找到返回 -1
 * @param list 
 * @param value 
 */
export default function indexOf<T>(list:T[],value:any){
  let index = -1
  while (++index < list.length){
    if(eq(list[index],value)){
      return index
    }
  }
  return -1
}