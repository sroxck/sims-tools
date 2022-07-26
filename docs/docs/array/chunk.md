# chunk

将给定数组分割为指定位数的二维数组
### 参数
 1. array `T[]` 要分割的数组
 2. size ` number` 分割的位数

### 返回值
分割后的二维数组`T[][]`

### 类型

```ts
declare function chunk<T>(array: T[], size?: number): T[][];
```

### 示例

``` ts
import { chunk } from 'sims-tools'

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
```