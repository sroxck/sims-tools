import isEmpty from "./isEmpty";
/**
 * 字符串转驼峰
 * the-shy => theShy
 * @param value 
 * @returns 
 */
export default function toHump(value:string):string{
  if(isEmpty(value)) return ''
  value = value.replace((/(-\w)|(_\w)/g),function(v){
    
    return v.substring(1).toUpperCase()
  })
  return value
}