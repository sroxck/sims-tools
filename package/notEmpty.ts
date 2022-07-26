import isEmpty from "./isEmpty";

export default function notEmpty(value:any):boolean{
  return !isEmpty(value)
}