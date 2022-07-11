export default function isTag(value:unknown,type:string):boolean{
  return Object.prototype.toString.call(value) === `[object ${type}]`
}