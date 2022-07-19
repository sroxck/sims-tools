/**
 * 此方法返回一个只执行一次的函数
 * @param fn 要封装函数
 * @returns Function
 */
export default function once(fn:Function):Function{
  let once_fn:boolean = false; 
    return function(){
      if(!once_fn) {
        once_fn = true;
        const result = fn.apply(this,arguments)
        return result
      }
    }
}