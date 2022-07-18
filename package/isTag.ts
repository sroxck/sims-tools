export default function isTag(value:unknown,type:string):boolean{
  const list = type.split('')
  list[0] = list[0].toLocaleUpperCase()
  type = list.join("")
  return Object.prototype.toString.call(value) === `[object ${type}]`
}
