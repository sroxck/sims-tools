import indexOf from "./indexOf"

/**
 * 从数组中删除所有与...args相同的元素,此方法会修改原数据,返回原数组,可链式调用
 * 
 * @param value 
 * @param args 
 * @returns T[] 
 */
 export default function remove<T>(value:T[],...args:any){
  for (let i = 0; i < value.length; i++) {
    for (let index = 0; index < args.length;) {
      const pos = indexOf(value,args[index])
      console.log(pos,value,args[index]);
      if(pos > -1){
        value.splice(pos,1)
      }else{
        index++
      }
    }
  }
  return value
}
