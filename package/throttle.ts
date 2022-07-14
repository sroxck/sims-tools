
export default function throttle(cb: Function,delay:number){
  let time:any = 0
  return function(){
    let now  = Date.now()
    if(now - time > delay){
        cb && cb.apply(this,arguments)
        time  = now
    }
  }
}