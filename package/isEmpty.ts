import isArray from "./isArray"
import isObject from "./isObject"

export default function isEmpty(value:any):boolean{
  if([null,undefined,'',false,void 0].includes(value)) return true
  if(isObject(value) && Object.keys(value).length<=0) return true
  if(isArray(value) && value.length<=0) return true
  return false
}