import {throttle} from '../package/index'
jest.useFakeTimers();
test('throttle',()=>{
  const test = jest.fn();
  const debounced = throttle(test, 1000);
  debounced();
  setTimeout(() => {
    debounced();
  }, 1002);
  jest.runAllTimers();

  expect(test).toHaveBeenCalledTimes(2);
})