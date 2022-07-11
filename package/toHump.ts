import isEmpty from "./isEmpty";

export default function toHump(value:string):string{
  if(isEmpty(value)) return ''
  value = value.replace((/-\w/g),function(v){
    
    return v.substring(1).toUpperCase()
  })
  return value
}