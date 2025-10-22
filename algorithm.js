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
