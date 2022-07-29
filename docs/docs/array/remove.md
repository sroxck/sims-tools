# remove
从数组中删除所有与...args相同的元素,此方法会修改原数据,返回原数组,可链式调用
### 参数 

1. value 
2. args


### 返回值 


### 类型 

``` ts 
export default function remove<T>(value: T[], ...args: any): T[];
``` 

### 示例 

``` ts
import { remove } from "../package/index";
test('remove',()=>{
  let test = [{a:1,b:2},{a:1,b:4},{a:1,b:2},{a:1,b:3},{a:1,b:2},{a:1,b:3}]
  expect(remove(test,{a:1,b:2})).toEqual([{a:1,b:4},{a:1,b:3},{a:1,b:3}])
})
``` 

