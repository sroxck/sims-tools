import {compact} from '../package/index'

describe('compact',()=>{
  it('compact',()=>{
    const fn = ()=>{}
    const test = [null,1,2,fn,void 0, '33"',NaN]
    expect(compact(test)).toEqual([1,2,fn,'33"'])
  })
})