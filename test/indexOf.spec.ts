import { indexOf } from "../package/index";
test('indexOf',()=>{
//  expect(indexOf([1,2,3],2)).toBe(1)
//  expect(indexOf([1,2,3],3)).toBe(2)
//  expect(indexOf([1,2,3],1)).toBe(0)
 expect(indexOf([ { a: 1, b: 4 }, { a: 1, b: 2 }, { a: 1, b: 3 } ], { a: 1, b: 2 },)).toBe(1)
})