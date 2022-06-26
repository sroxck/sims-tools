import {chunk} from '../package/index'

describe('chunk',()=>{
  it('chunk-1',()=>{
    const array = [1,2,3,4,5]
    expect(chunk<number>(array,2)).toEqual([[1,2],[3,4],[5]])
  })
  it('chunk-2',()=>{
    const array = [1,2,3,4,5]
    expect(chunk<number>(array,0)).toEqual([])
    expect(chunk<number>(array,-2)).toEqual([])
  })
})