/**
 * 
 * @param value 
 * @returns {boolean} return 'true' if 'value' is an object,else 'false'
 * @example
 * 
 * isObject({})
 * // => true
 * 
 * isObject([1,2,3])
 * // => true
 * 
 * isObject(null)
 * // => false
 */
function isObject(value:any): boolean{
  if(value === null) return false
  const type = typeof value 
  return type !== null && (type === 'object' )
}
export default isObject
// typeof null 得到 object 需要排除
// typeof function 得到 function 函数也属于对象
