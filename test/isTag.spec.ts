import {isTag} from '../package/index'

test('tag',()=>{
  expect(isTag('string','string')).toBe(true)
})