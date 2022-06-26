import {isObject} from '../package/index'
test('isObject', () => {
  expect(isObject('3')).toBe(false)
  expect(isObject(2)).toBe(false)
  const testFun = function (){}
  expect(isObject(testFun)).toBe(true)
});