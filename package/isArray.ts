import isTag from "./isTag";

export default function isArray(value:any):boolean{
  return isTag(value,'Array')
}
