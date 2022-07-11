import {isEmpty} from '../package/index'
test('isEmpty',()=>{
  expect(isEmpty({a:1})).toEqual(false)
})