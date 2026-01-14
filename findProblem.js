const assert = require('assert');

describe("Basic tests", function() {
  describe("correct sequence of arrows", function() {
    it("dec_arrow_pin_code('1→↑→')  ==>  [1, 2, 5, 6]", function() {
      assert.deepStrictEqual(decArrowPinCode("1→↑→"), [1, 2, 5, 6]);
    });
    it("dec_arrow_pin_code('1*2↓')  ==>  [1, 1, 1, 0]", function() {
      assert.deepStrictEqual(decArrowPinCode("1*2↓"), [1, 1, 1, 0]);
    });
    it("dec_arrow_pin_code('0*2↑')  ==>  [0, 0, 0, 1]", function() {
      assert.deepStrictEqual(decArrowPinCode("0*2↑"), [0, 0, 0, 1]);
    });
    it("dec_arrow_pin_code('0↑↑↑')  ==>  [0, 1, 4, 7]", function() {
      assert.deepStrictEqual(decArrowPinCode("0↑↑↑"), [0, 1, 4, 7]);
    });
  });
