import isArray from "./isArray"
import isObject from "./isObject"
/**
 * 判断给定值是否为空
 * isEmpty({}) => true
 * isEmpty([]) => false
 * isEmpty("") => false
 * ...
 * @param value 
 * @returns 
 */
export default function isEmpty(value:any):boolean{
  if([null,undefined,'',false,void 0].includes(value)) return true
  if(isObject(value) && Object.keys(value).length<=0) return true
  if(isArray(value) && value.length<=0) return true
  return false
}