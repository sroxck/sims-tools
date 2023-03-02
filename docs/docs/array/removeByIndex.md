# removeByIndex
从数组中删除所有给定索引的元素,返回新数组
### 参数 

1. indexList 指定的索引或索引数组
2. list 要删除的数组


### 返回值 
删除指定索引后的新数组

### 类型 

``` ts 
export default function removeByIndex<T>(indexList: T[]|number, list: T[]): T[];
``` 

### 示例 

``` ts
import { removeByIndex } from "../package/index";
test('removeByIndex',()=>{
 const indexList = [0,2,4]
 const list = [1,2,3,4,5,6,7,8,9]
 expect(removeByIndex(indexList,list)).toEqual([2,4,6,7,8,9])
 expect(removeByIndex(3,list)).toEqual([1,2,3,5,6,7,8,9])
})

``` 

