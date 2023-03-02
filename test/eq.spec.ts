import { eq } from "../package/index";
test('eq',()=>{
  expect(eq({a:3},{a:3})).toBe(true)
  // expect(eq(undefined,NaN)).toBe(true)
})
