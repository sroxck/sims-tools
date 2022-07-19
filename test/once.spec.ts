import { once } from "../package/index";
test('once',()=>{
  const test = jest.fn();
 
  const once_fn = once(test);
  once_fn()
  once_fn()
  expect(test).toHaveBeenCalledTimes(1);

})