describe("tests", function() {
    const {assert, config} = require('chai');
    config.truncateThreshold = 0;

    it("Sample tests", function() {
      assert.strictEqual(new Num(123) + new Num(123), 246);
      assert.strictEqual(new Num(15) + new Num(15) + 5, 35);
      assert.strictEqual(new Num(1) * new Num(0) + 5, 5);
      assert.strictEqual(new Num(1) - new Num(10), -9);
      assert.strictEqual(new Num(0) + new Num(0) + 0, 0);
      assert.strictEqual(Math.floor(new Num(5.5)), Math.floor(5.5));
      assert.strictEqual(new Num(100).toString(), "The number is 100")
      assert.strictEqual(new Num(150).valueOf().num, 150, "new Num(150).valueOf().num should be 150")
      assert.typeOf(new Num(150), "object", "typeof new Num should be object")
      assert.typeOf(new Num(150).valueOf().num, "number")
    });
});

const {assert} = require('chai')

describe('Fixed tests', function () {

  describe('Examples', function () {
    it('Single raffle: 1 ticket out of 3', function () {
      assert.strictEqual(raffleOdds([3], [1]), '1/3');
    });

    it('Two raffles: 1 ticket each out of 4', function () {
      assert.strictEqual(raffleOdds([4, 4], [1, 1]), '7/16');
    });

    it('Three raffles with different pool sizes', function () {
      assert.strictEqual(raffleOdds([2, 3, 6], [1, 1, 1]), '13/18');
    });
  });
  
});

// Advanced prime number generator using segmented sieve and wheel factorization
function generatePrimes(limit) {
    if (limit < 2) return [];

    const sqrtLimit = Math.sqrt(limit) | 0;
    const basePrimes = simpleSieve(sqrtLimit);
    const segmentSize = Math.max(sqrtLimit, 32768);
    const primes = [...basePrimes]; // initial primes

    let low = sqrtLimit + 1;
    let high = low + segmentSize - 1;

    while (low <= limit) {
        if (high > limit) high = limit;

        const mark = new Uint8Array(high - low + 1);

        for (let i = 0; i < basePrimes.length; i++) {
            const p = basePrimes[i];
            // Find the start point to mark multiples of p
            let start = Math.ceil(low / p) * p;
            if (start < p * p) start = p * p;
            for (let j = start; j <= high; j += p) {
                mark[j - low] = 1; // mark as composite
