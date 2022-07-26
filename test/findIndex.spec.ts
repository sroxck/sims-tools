import { findIndex } from "../package/index";
test('findIndex',()=>{
 expect(findIndex([{a:1},{a:2}],(item:any)=>{
    return item.a == 2
 })).toBe(1)
})