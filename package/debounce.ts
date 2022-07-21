/**
 * 防抖函数
 * @param fn 需要包装的函数
 * @param delay 延迟执行的描述
 * @param immediate 是否立即执行一次,默认false
 * @param cb 回调函数,可获取执行函数返回值
 * @returns
 */
interface enhanceType {
  (): void,
  cancel(): void,
}
 export default function debounce(fn: Function, delay: number): enhanceType
 export default function debounce(fn: Function, delay: number,immediate: boolean): enhanceType
 export default function debounce(fn: Function, delay: number,immediate: boolean,cb: Function): enhanceType
export default function debounce(
  fn: Function,
  delay: number,
  immediate: boolean = false,
  cb?: Function
) {
  let timer: NodeJS.Timeout | number | null; // 定时器
  let isStarted = false; // 是否第一次点击
  /**
   * 包装后的函数
   */
  const _debounce = function () { 
    // 如果开启立即执行,并且是第一次
    if (immediate && !isStarted) {
      // 直接执行
      const value = fn.apply(this, arguments);
      // 将返回值放入回调函数中
      cb && cb(value);
      // 不在是第一次点击
      isStarted = true;
    }
    if (timer) {
      // 再次点击的时候 如果定时器存在 说明上次没执行完,立即清空,重新启动定时器
      clearTimeout(timer as number);
    }
    timer = setTimeout(() => {
      const value = fn.apply(this, arguments);
      cb && cb(value);
      isStarted = false;
    }, delay);
  };
  // 手动取消
  _debounce.cancel = function () {
    if (timer) {
      clearInterval(timer as number);
      timer = null;
    }
  };
  return _debounce;
}
