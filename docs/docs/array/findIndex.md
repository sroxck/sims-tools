# findIndex
遍历给定数组,返回给定函数中返回真值的第一个元素的索引,未找到返回-1
### 参数 

1. list `T[]` 迭代数组
2. fn `Function` 迭代函数


### 返回值 

迭代函数返回真值的結果索引

### 类型 

``` ts 
export default function findIndex<T>(list: T[], fn: Function): number;
``` 

### 示例 

``` ts
import { findIndex } from "../package/index";
test('findIndex',()=>{
 expect(findIndex([{a:1},{a:2}],(item:any)=>{
    return item.a == 2
 })).toBe(1)
})
``` 

