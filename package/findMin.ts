import isArray from "./isArray";
import noop from "./noop";

interface ArrayType {
  [key: string]: any
}
/**
 * 此方法返回数组或对象数组中给定key的最大值
 * 
 * findMin([1,2,3]) => 1
 *  
 * const obj = [{name:'zs',age:18},{name:'zs2',age:19} ]
 * 
 * findMin(obj,'age') => 18
 * 
 * findMin(obj,'age',true) => {name:'zs',age:18}
 * 
 * @param value
 * @param name
 */
 export default function findMin<T extends Number>(value:T[]):number | Error
 export default function findMin<T extends Number>(value:T[],name:string):number | Error
 export default function findMin<T extends ArrayType| Number>(value:T[],name:string,root:boolean):number | object | Error
export default function findMin<T extends ArrayType | number>(
  value: T[],
  name?: string,
  root?: boolean
): number | object | Error {
  if (!isArray(value)) throw new TypeError("参数为number[] | object[]");
  if (name === noop()) {
    return Math.min.apply(Math, value as unknown as number[]);
  }
  if (name && root) {
    // 这里需要更优雅，原生的解决方案
    const copy = JSON.parse(JSON.stringify(value))
    copy.sort((item: any, old: any) => (<ArrayType>item)[name] - (<ArrayType>old)[name])
    return value = copy[0]
  } else {
    if (isNaN(Math.min.apply(Math, value.map(item => (<ArrayType>item)[name as string])))) throw new TypeError("参数类型不可被排序")
    return Math.min.apply(Math, value.map(item => (<ArrayType>item)[name as string]))
  }
}
