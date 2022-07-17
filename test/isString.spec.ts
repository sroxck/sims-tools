import { isString } from "../package/index";
test('isString',()=>{
  expect(isString('22')).toBe(true)
})