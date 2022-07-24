/**
 * 合并数组内给定key的value值
 * var arr = [
 * {"id":"1","name":"张三","value":"1111"},
 * {"id":"1","name":"张三","value":"1111"},
 * {"id":"2","name":"李四","value":"2222"},
 * {"id":"2","name":"李四","value":"2222"}]
 * 
 * 输出:
 * [
 * {"id":"1","name":"张三","value":"2222"},
 * {"id":"2","name":"李四","value":"4444"},
 * ]
 * @param list 要合并的数组
 * @param key 合并的键
 * @param value 合并的值
 */
export default function merge(list: Record<string, any>[], _key: string, _value: number | string) {
  const map:any = {}
  const res:any = []
  let index = -1
  while(++index < list.length){
    const item = list[index]
    if(!map[item[_key]]){
      res.push(item)
      map[item[_key]] = item
    }else{
      let i = -1
      while(++i < res.length){
        const val = res[i]
        if(val[_key] === item[_key]){
          val[_value] =parseFloat( val[_value])+ parseFloat(item[_value])
          break
        }
      }
    }
    
  }
  return res
}