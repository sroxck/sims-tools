import {toHump} from '../package/index'
test('string to Hump',()=>{
  expect(toHump("a_b-s")).toBe('aBS')
})