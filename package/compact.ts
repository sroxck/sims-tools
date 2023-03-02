import isArray from "./isArray";
import isObject from "./isObject";
/**
 * 数组过滤假值
 * @param array 要过滤的数组
 * @returns 返回一个不包含假值的新数组
 */
export default function compact<T>(array: T[]): T[] {
  let result: T[] = [];
  if (!isArray(array) && (array === null || array === void 0)) return result;
  for (const item of array) {
    console.log(item)
    if (isObject(item)) {
      if (Object.keys((item as any)).length === 0) {
        continue
      }
    }
    if (item) {
      result.push(item);
    }
  }
  return result;
}
