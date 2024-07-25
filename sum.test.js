"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("./sum");
// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });
describe('sum', () => {
    it('should add two numbers', () => {
        const result = (0, sum_1.sum)(1, 2);
        expect(result).toBe(3);
    });
});
