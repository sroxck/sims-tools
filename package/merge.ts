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
export default function merge(_list: Record<string,any>[],_key:string,_value:number | string) {
  // const map:Record<string,any> = {}
  // const result = []
  // for (const [i,v] of list.entries()) {
    
  // }
}
// var arr = [
//   {"id":"1","name":"张三","value":"1111"},
//   {"id":"1","name":"张三","value":"1111"},
//   {"id":"2","name":"李四","value":"2222"},
//   {"id":"2","name":"李四","value":"2222"}]
//   merge(arr,'id','value')