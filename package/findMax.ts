import isArray from "./isArray";
import noop from "./noop";

interface ArrayType {
  [key: string]: any
}
/**
 * 此方法返回数组或对象数组中给定key的最大值
 * 
 * findMax([1,2,3]) => 3   
 * 
 * const obj = [{name:'zs',age:18},{name:'zs2',age:19} ]
 * 
 * findMax(obj,'age') => 19
 * 
 * findMax(obj,'age',true) => {name:'zs2',age:19}
 * 
 * @param value
 * @param name
 */
export default function findMax<T extends ArrayType | number>(
  value: T[],
  name?: string,
  root?: boolean
): number | object | Error {
  if (!isArray(value)) throw new TypeError("参数为number[] | object[]");
  if (name === noop()) {
    return Math.max.apply(Math, value as unknown as number[]);
  }
  if (name && root) {
    // 这里需要更优雅，原生的解决方案
    const copy = JSON.parse(JSON.stringify(value))
    copy.sort((item: any, old: any) => (<ArrayType>old)[name] - (<ArrayType>item)[name])
    return value = copy[0]
  } else {
    if (isNaN(Math.max.apply(Math, value.map(item => (<ArrayType>item)[name])))) throw new TypeError("参数类型不可被排序")
    return Math.max.apply(Math, value.map(item => (<ArrayType>item)[name]))
  }
}
