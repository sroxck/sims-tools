/**
 * 从数组中删除所有与...args相同的元素,此方法会修改原数据,返回原数组,可链式调用
 * 
 * @param value 
 * @param args 
 * @returns T[] 
 */
 export default function remove<T>(value:T[],...args:any){
  let index = -1
  while(++index <= args.length){
    let i = -1
    while(++i <= value.length){
        let key = value.indexOf(args[i])
        if(key > -1){
          value.splice(key,1)
        }
    }
  }
  return value
}
console.log([{a:1}].indexOf({a:1}));
