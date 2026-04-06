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
