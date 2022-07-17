import {findMax} from '../package/index'
import {findMin} from '../package/index'

test('findMax and min',()=>{
  // let s = [2,3,4,5]
  let s1 = [{
    name:"3",
    age:33
  },{
    name:"54",
    age:343
  },{
    name:444,
    age:343
  }]
  expect(findMax(s1,'name',true)).toEqual({
    name:444,
    age:343
  })
  
  expect(findMin(s1,'name',true)).toEqual({
    name:"3",
    age:33
  })
})