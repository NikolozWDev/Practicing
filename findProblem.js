function Warrior(n){
  this._name = n;
  this.name = function(n){
    if(n) this._name = n;
    return this._name;
  }
}

Warrior.prototype.toString = function(){
  return "Hi! my name's " + this.name();
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var game = new SnakesLadders();
Test.assertEquals(game.play(1, 1), "Player 1 is on square 38", "Should return: 'Player 1 is on square 38'");
Test.assertEquals(game.play(1, 5), "Player 1 is on square 44", "Should return: 'Player 1 is on square 44'");
Test.assertEquals(game.play(6, 2), "Player 2 is on square 31", "Should return: 'Player 2 is on square 31'");
Test.assertEquals(game.play(1, 1), "Player 1 is on square 25", "Should return: 'Player 1 is on square 25'");
  });
});

const { assert } = require('chai');

describe("Silly addition", () => {
  it("Real addition", () => {
    assert.strictEqual(add(2, 11), 13);
    assert.strictEqual(add(0, 1), 1);
    assert.strictEqual(add(0, 0), 0);
  });
  
  it("Silly addition", () => {
    assert.strictEqual(add(16, 18), 214);
    assert.strictEqual(add(26, 39), 515);
    assert.strictEqual(add(122, 81), 1103);
  });
  
  it("Big addition", () => {
    assert.strictEqual(add(1222, 30277), 31499);
    assert.strictEqual(add(1236, 30977), 31111013);
    assert.strictEqual(add(38810, 1383), 391193);
    assert.strictEqual(add(49999, 49999), 818181818);
  });
});


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
