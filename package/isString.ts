import isTag from "./isTag";

export default function isString(value:any){
  return isTag(value,'string')
}