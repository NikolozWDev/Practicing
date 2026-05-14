function solveNQueens(N) {
  const solutions = [];
  const positions = new Array(N).fill(-1);

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      const prevCol = positions[i];
      // Check same column or diagonals
      if (prevCol === col || Math.abs(prevCol - col) === Math.abs(i - row)) {
        return false;
      }
    }
    return true;
  }

  function backtrack(row = 0) {
    if (row === N) {
      solutions.push([...positions]);
      return;
    }
    for (let col = 0; col < N; col++) {
      if (isSafe(row, col)) {
        positions[row] = col;
        backtrack(row + 1);
        // backtrack


import threading
import requests
from bs4 import BeautifulSoup
import queue

# List of URLs to scrape
urls = [
    'https://example.com/page1',
    'https://example.com/page2',
    'https://example.com/page3',
    # Add more URLs as needed
]

# Thread worker function
def fetch_and_parse(q, results):
    while True:
        url = q.get()
        if url is None:
            break
        try:
            response = requests.get(url, timeout=5)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, 'html.parser')


<script>
  // Function to display a greeting message
  function greetUser() {
    alert('Hello! Welcome to my website.');
  }

  // Add event listener to the button after the DOM loads
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    if (button) {
      button.addEventListener('click', greetUser);
    }
  });
</script>

// Define a class called Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create an instance of Person
const person1 = new Person('Alice', 25);
person1.greet(); // Output: Hello, my name is Alice and I'm 25 years old.

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
