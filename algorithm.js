const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});

const { assert } = require("chai");

describe("Sample Tests", () => {
  it("", () => {
    //return a.concat(b) ?
    assert.deepEqual(testit([0],[1]), [0,1], "")
    assert.deepEqual(testit([1,2],[3,4]), [1,2,3,4], "")
    assert.deepEqual(testit([1],[2,3,4]), [1,2,3,4], "")
    assert.deepEqual(testit([1,2,3],[4]), [1,2,3,4], "")
    assert.deepEqual(testit([1,2],[1,2]), [1,1,2,2], "")
    //click "Submit" try more testcase...
  });
});

// happy new year
function willItWorkIn2026() {
  const problems = [
    "AI said it's fine ",
    "Works on my machine! ",
    "It's a feature, not a bug ",
    "The internet told me to do this ",
    "Added more console.log() "
  ];
  
  const randomProblem = problems[Math.floor(Math.random() * problems.length)];
  
  const willWork = Math.random() > 0.5;
  
  if (willWork) {
    return `Yes! Because: "${randomProblem}"`;
  } else {
    return `Nope But: "${randomProblem}"`;
  }
}

function predict2026() {
  console.log("2026 Prediction:");
  console.log("JavaScript will have " + (Math.floor(Math.random() * 10) + 5) + " new frameworks");
  console.log("We'll still not understand Promises");
  console.log(willItWorkIn2026());
}

predict2026();

console.log("\nconsole.log('Hello 2026!'); // Still debugging with this");


function listFromArray(nodesArray) {
   if(nodesArray.length === 0)
       return null;
   const head = nodesArray[0];
   for (let i = 1; i < nodesArray.length; i++)
       nodesArray[i - 1].next = nodesArray[i];

   nodesArray.at(-1).next = null;
   return head;
    }

from solution import sq_in_rect
import codewars_test as test

@test.describe("Tests...")
def _():
    @test.it("Basic Tests")
    def _():
        test.assert_equals(sq_in_rect(5, 5), None)
        test.assert_equals(sq_in_rect(5, 3), [3, 2, 1, 1])
        test.assert_equals(sq_in_rect(3, 5), [3, 2, 1, 1])
        test.assert_equals(sq_in_rect(20, 14), [14, 6, 6, 2, 2, 2])

const chai=require('chai')
const assert=chai.assert
chai.config.truncateThreshold = 0;

describe("Basic tests",function(){
  it("Basic tests",function(){
    assert.deepEqual(sqInRect(5, 5), null)
    assert.deepEqual(sqInRect(5, 3), [3, 2, 1, 1])
    assert.deepEqual(sqInRect(3, 5), [3, 2, 1, 1])
    assert.deepEqual(sqInRect(20, 14), [14, 6, 6, 2, 2, 2])
  })
});

const Test = require('@codewars/test-compat');

describe("Normal operation", function() {
  it ("should open completely and stay open", function() {
    Test.assertEquals(door('P....'+'.'.repeat(10)),'12345'+'5'.repeat(10));
  });
  
  it ("should open completely, then stay open, then close", function() {
    Test.assertEquals(door('P......P......'),
                           '12345554321000');
  });
});

describe("Pause", function() {
  it ("should start opening and pause on second buttonpress", function() {
    Test.assertEquals(door('P.P..'),
                           '12222');
  });
  it ("should resume opening on third buttonpress", function() {
    Test.assertEquals(door('P.P.P....'),
                           '122234555');
  });
});

describe("Obstacle", function() {
  it ("should reverse while opening", function() {
    Test.assertEquals(door('P.O....'),
                           '1210000');
  });
});

describe("Obstacle + Pause", function() {
  it ("should reverse while opening (and allow pause)", function() {
    Test.assertEquals(door('P..OP..P..'),
                           '1232222100');
  });
});

describe("Example", function() {
  it ("should start opening and reverse when obstacle", function() {
    Test.assertEquals(door('..P...O.....'),
                           '001234321000');
  });
});



class Archiver {
    constructor() {
    }

    set temperature(temperature) {
    }

    get temperature() {
    }

    getArchive() {
        return [];
    }
}
function createGame(winningNumber) {
  let attempts = 0; // This variable is stored in the closure's backpack

  return function guess(number) {
    attempts++;
    if (number === winningNumber) {
      return `You win in ${attempts} attempts!`;
    } else {
      return `Try again. It's your ${attempts}th attempt.`;
    }
  }
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;


function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (let el of arr) {
    if (el < pivot) {
      left.push(el);
    } else if (el > pivot) {
      right.push(el);
    } else {
      equal.push(el);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));



double someNumber = .123 + .456 * Math.Pow(Math.E, .789 * Math.Pow((homeIndex + .22), .012));
algorithm that shows someNumber

thinking passwords
solved algorithms
bodishi mishiko

let array = [10, 23, 25, 62, 45, 23];

solved medium task

let i = 0;
while(i < array.length) {
  console.log(array[i]);
 i = i + 1;
};


there are more tools
yea, yea more tools. your brain is -x number IQ


solve many problems tasks

solved 8 tasks today
good job
more job to require more logic intelect

today solved 3 6kyu Javascript problems in codewars
momiteve
4 7kyu tasks

codding without VScode is bullshit
