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
