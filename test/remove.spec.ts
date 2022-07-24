import { remove } from "../package/index";
test('remove',()=>{
  let testlist = [1,1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,9,0,11,23,454]
  // let testlist1 = [{a:1,b:2},{a:1,b:4},{a:1,b:2},{a:1,b:3},{a:1,b:2},{a:1,b:3}]
  expect(remove(testlist,1,2,3,4,5,6,7,8,9)).toEqual([0,11,23,454])
})