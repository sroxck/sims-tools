# findMin *

此方法返回数值型数组或对象数组中给定 key 的最小值


### 参数
1. **value**`number[] | ArrayType[]`: 检索的数组
2. **name**(可选)`string`: 检索的key   
3. **root**(可选)`boolean`: 是否返回根元素,默认false   


### 返回值
`number | object | Error`返回数组中的最小值  

### 类型

```ts
type ArrayType = Record<string,any>
export default function findMin<T extends Number>(value: T[]): number | Error;
export default function findMin<T extends Number>(
  value: T[],
  name: string
): number | Error;
export default function findMin<T extends ArrayType | Number>(
  value: T[],
  name: string,
  root: boolean
): number | object | Error;
export default function findMin<T extends ArrayType | Number>(
  value: T[],
  name?: string,
  root?: boolean
): number | object | Error
```

### 示例

``` ts
const test1 = [1,2,3,4,5]
const test2 = [{name:'张三',age:18},{name:'李四',age:19}]

findMin(test1) => 1 

findMin(test2,'age') => 18

findMin(test2,'age',true) => {name:'张三',age:18}
```