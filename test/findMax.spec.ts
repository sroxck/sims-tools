import {findMax} from '../package/index'

test('findMAx',()=>{
  // let s = [2,3,4,5]
  let s1 = [{
    name:"3",
    age:33
  },{
    name:"3333单独",
    age:343
  }]
  expect(findMax(s1,'name')).toBe(8)
})