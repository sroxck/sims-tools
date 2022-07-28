import { each } from "../package/index";
test('each', () => {
  let index = 0
  each<Number>([1, 2, 3], (_item: any) => {
    index += _item
    if (index == 3) {
      return 'each_break'
    }
  })
  expect(index).toBe(6)
})