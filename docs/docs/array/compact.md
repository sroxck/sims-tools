# compact
过滤给定数组中的假值，返回新数组
### 参数
 1. array `T[]` 要过滤的数组

### 返回值
不包含假值的新数组`T[]`

### 类型

```ts
export default function compact<T>(array: T[]): T[];
```

### 示例

``` ts
import {compact} from '../package/index'

describe('compact',()=>{
  it('compact',()=>{
    const fn = ()=>{}
    const test = [null,1,2,fn,void 0, '33"',NaN]
    expect(compact(test)).toEqual([1,2,fn,'33"'])
  })
})
```