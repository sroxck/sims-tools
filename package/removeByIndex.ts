import isArray from "./isArray"
import isTag from "./isTag"

/**
 * @param index 索引或索引数组
 * @param list 要删除的数组
 * @returns 返回删除后的新数组,不改变原数组
 */
export default function removeByIndex(index: Number[] | number, list: any[]): [] {
  let result: any = []
  if (!isArray(list)) return result
  if (isArray(index)) {
    result = list.filter((_item, i) => !(index as Number[]).includes(i))
  }
  if (isTag(index, 'number')) {
    result = list.filter((_item, i) => !(i == index))
  }
  return result
}
