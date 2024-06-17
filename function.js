//   let c= 0;

// function uildel(a, b) {
//   return a + b;
// }
// function hasah(a, b) {
//   return a - b;
// }
// function urjih(a, b) {
//   return a * b;
// }
// function huvaah(a, b) {
//   return a / b;
// }

// let a = uildel(10, 5);
// console.log(a);
// let b = hasah(10, 5);
// console.log(b);
// let c = urjih(10, 5);
// console.log(c);
// let d = huvaah(10, 5);
// console.log(d);

// Write your code here
// BODLOGO 1 FUNCTION
// function maxNumber() {
//   if (a > b) {
//     console.log(a);
//   } else {
//     console.log(b);
//   }
// }
// let a = Number(prompt("too oruul:  "));
// let b = Number(prompt("too oruul:  "));
// maxNumber(a, b);

// BODLOGO 2 FUNCTION
let arr = [1, 34, 35, 1];
function findNumber(arr) {
  let c = Number(prompt("too oruul:  "));
  let numFind = 0;

  for (let i = 0; i < arr.length; i++) {
    if (c === arr[i]) {
      c = arr[i];
    } else {
      numFind = "-1";
    }
  }
  return c, numFind;
}

findNumber(arr);
