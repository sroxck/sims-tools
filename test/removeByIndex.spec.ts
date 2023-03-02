import { removeByIndex } from "../package/index";
test('removeByIndex',()=>{
 const indexList = [0,2,4]
 const list = [1,2,3,4,5,6,7,8,9]
 expect(removeByIndex(indexList,list)).toEqual([2,4,6,7,8,9])
 expect(removeByIndex(3,list)).toEqual([1,2,3,5,6,7,8,9])
})
