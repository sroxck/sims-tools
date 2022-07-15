import isArray from "./isArray";
/**
 * 数组过滤假值
 * @param array 要过滤的数组
 * @returns 
 */
export default function compact<T>(array: T[]): T[] {
  let result: T[] = [];
  if (!isArray(array) && (array === null || array === void 0)) return result;
  for (const item of array) {
    if (item) {
      result.push(item);
    }
  }
  return result;
}
