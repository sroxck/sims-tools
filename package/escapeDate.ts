
/**
 * yyyy-mm-dd hh:mm:ss
 * @param value 
 */

// tudo 优化此函数
function escapeDate(value:string|Date,type:string = 'yyyy-mm-dd'):string|void|Date{
 const time:Date = new Date(value)
 let date:Date|string|void;
 const year = time.getFullYear()
 const month = (time.getMonth() + 1).toString().padStart(2,'0')
 const day = time.getDate()
 const hour = time.getHours().toString().padStart(2,'0')
 const minute = time.getMinutes().toString().padStart(2,'0')
 const seconds = time.getSeconds().toString().padStart(2,'0')
 const week = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'][time.getDay()]
  if(type.toLocaleLowerCase() === 'yyyy-mm-dd'){
    date = `${year}-${month}-${day}`
  }
  if(type.toLocaleLowerCase() === 'yyyy-mm-dd hh:mm:ss'){
    date = `${year}-${month}-${day} ${hour}:${minute}:${seconds}`
  }
  if(type.toLocaleLowerCase() === 'yyyy-mm'){
    date = `${year}}-${month}`
  }
  if(type.toLocaleLowerCase() === 'yyyy'){
    date = `${year}}`
  }
  if(type.toLocaleLowerCase() === 'yyyy-mm-dd week'){
    date = `${year}-${month}-${day} ${week}`
  }
  if(type.toLocaleLowerCase() === 'yyyy-mm-dd hh:mm:ss week'){
    date = `${year}-${month}-${day} ${hour}:${minute}:${seconds} ${week}`
  }
  return date
  
}
console.log(escapeDate(new Date,'yyyy-mm-dd hh:mm:ss week'));

