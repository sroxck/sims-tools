import isTag from "./isTag";

export default function isFunction(value:any):boolean{
  return isTag(value,'Function')
}