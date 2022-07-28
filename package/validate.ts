function validate(value:any,config:any){
  config.get(value)
}
const a = {a:3}
validate(a,{
  get:(item:any)=>{
    if(item>2){
      console.log(2);
      
    }
  },
  set:()=>{

  }

})