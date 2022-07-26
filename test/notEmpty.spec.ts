import { notEmpty } from "../package/index";
test('notEmpty',()=>{
 expect(notEmpty('')).toBe(false)
 expect(notEmpty([])).toBe(false)
 expect(notEmpty({})).toBe(false)
 expect(notEmpty(null)).toBe(false)
 expect(notEmpty(void 0)).toBe(false)
 expect(notEmpty(undefined)).toBe(false)
 expect(notEmpty([1])).toBe(true)
})