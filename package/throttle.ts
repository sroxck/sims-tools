/**
 * 节流函数
 * @param cb 封装函数
 * @param delay 节流时间
 * @param trailing 尾执行
 * @returns 
 */
export default function throttle(
  cb: Function,
  delay: number,
  trailing?: boolean
) {
  let time: any = 0;
  let timer: NodeJS.Timeout | number | null;
  return function () {
    let now = Date.now();
    if (now - time > delay) {
      if (cb) {
        cb.apply(this, arguments);
      }
      time = now;
    }
    // 是否开启尾执行
    if ( trailing) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        cb.apply(this, arguments);
        time = now;
      }, delay);
    }
  };
}
