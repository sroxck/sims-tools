# each !
给定数组进行迭代,可通过返回false退出迭代
### 参数
 1. value `T[]` 迭代数组
 2. _fn `Function` 迭代函数

### 返回值
不包含假值的新数组`T[]`

### 类型

```ts
export default function each<T>(value: T[], _fn: Function): void;
```

### 示例

``` ts
import { each } from "../package/index";
test('each', () => {
  let index = 0
  each<Number>([1, 2, 3], (_item: any) => {
    index += _item
    if (index == 2) {
      return false
    }
  })
  expect(index).toBe(3)
})
```