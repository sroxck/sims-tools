import { eq } from "../package/index";
test('eq',()=>{
  expect(eq({a:[1,2]},{a:[1,2]})).toBe(true)
})