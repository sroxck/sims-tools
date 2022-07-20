/**
 * 给定数组进行迭代,可通过返回"each_break"退出迭代
 * @param value 迭代数组
 * @param _fn 迭代函数
 */
export default function each<T>(value:T[],_fn:Function):void {
  let index:any = -1
  while(++index < value.length) {
    const result = _fn(value[index],index,value)
    if(result === 'each_break'){
      break
    }
  }
}