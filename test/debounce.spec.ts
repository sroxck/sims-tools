import {debounce} from '../package/index'
jest.useFakeTimers();
// 定时器加速
test('debounce',()=>{
  const test = jest.fn();
  // 测试函数
  const debounced = debounce(test, 1000);
  debounced()
  setTimeout(() => {
    debounced()
  }, 1001);
  debounced()
  
  // 取消一次
  debounced.cancel()
  // 直接加速定时器
  jest.runAllTimers();
  // 测试函数被执行了多少次
  expect(test).toHaveBeenCalledTimes(1);
})