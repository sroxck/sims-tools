import isArray from "./isArray";
import isObject from "./isObject";

/**
 * 判断两个值是否相同
 * 
 * 使用 SameValueZero 进行全等比较。 
 * @param value 
 * @param target 
 */

export default function eq(value: any, target: any): boolean {
  // 有bug 如果值 是array 没判断 判断逻辑有问题 需要修改
  console.log(value,target,'value1')
  // if (isNaN(value) && isNaN(target)) return true
  console.log(value,target,'value2')

  if (isObject(value) && isObject(target)) {
  console.log(value,target,'value3')

    let flag = true
    if (Object.keys(target).length !== Object.keys(value).length) return flag
    for (const key in value) {
      if (!Object.prototype.hasOwnProperty.call(target, key)) {
        flag = false
      }
      if (typeof value[key] !== typeof target[key]) {
        flag = false
      }

      if (value[key] !== target[key]) {
        flag = false
      }

      if (isArray(value[key]) || isObject(target[key])) {
        flag = eq(value[key], target[key])
      }
    }
    return flag
  } else {
    return value === target
  }
}
/**
 * 1. 双方都是对象,则进入判断
 * 1.1 双方长度不相等 则return false
 * 1.2 双方key不相同 return false
 * 1.3 双方key类型不相同 return false
 * 1.4 如果值是undefined、number、string、boolean,null的一种，直接两个值比较，不同，则return false
 * 1.5 如果值是对象，递归
 * 1.6 如果值是数组，因为数组项可能是任意一种数据类型的，所以还是先比较长度，长度相等后再逐一比较数组的每一项
 *  
 */
