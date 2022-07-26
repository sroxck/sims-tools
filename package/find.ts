
export default function find<T>(list: T[], fn: Function): T[] {
  let index = -1;
  let res = []
  while (++index < list.length) {
    const result  = fn(list[index],index)
    if(result){
      res.push(list[index])
    }
  }
  return res
}
