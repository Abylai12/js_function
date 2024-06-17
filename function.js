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
// let arr = [1, 34, 35, 2];
// function findNumber(arr) {
//   let c = Number(prompt("too oruul:  "));
//   let numFind = 0;
//   let num = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (c === arr[i]) {
//       num = arr[i];
//     }
//   }
//   if (num === 0) {
//     numFind = "-1";
//   } else {
//     numFind = num;
//   }
//   console.log(numFind);
//   return numFind;
// }
// findNumber(arr);
// bodlogo 3 garaas avsan ugiin useg baigaa esehiig shalgah

// function findWord() {
//   let arr = prompt("ug oruulna uu?:  ");
//   let c = prompt("haih usegee oruulna uu?:  ");
//   let numFind = 0;
//   let num = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (c === arr[i]) {
//       num = arr[i];
//     }
//   }
//   if (num === 0) {
//     numFind = "-1";
//   } else {
//     numFind = num;
//   }
//   console.log(numFind);
//   return numFind;
// }
// findWord();
// Bodlogo 4 ugudsun array dundajii ol

// let arr = [1, 34, 35, 2];
// function findNumber(arr) {
//   let numFind = 0;
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     numFind += arr[i];
//     num = arr.length;
//   }
//   let avg = numFind / num;
//   console.log(avg);
//   return avg;
// }
// findNumber(arr);

// Bodlogo 5 ugudsun array niilveriig ol
// let arr = [1, 34, 35, 2];
// function findNumber(arr) {
//   let numFind = 0;
//   for (let i = 0; i < arr.length; i++) {
//     numFind += arr[i];
//   }
//   console.log(numFind);
//   return numFind;
// }
// findNumber(arr);

//  bodlogo 6 Ugugdsun too anhnii too esehiig ol
// function anhniiToo() {
//   let a = Number(prompt("too oruulna uu:  "));
//   if (a > 1) {
//     let num = 0;
//     for (let i = 2; i <= a; i++) {
//       if (a % i == 0) {
//         num++;
//       }
//     }
//     if (num == 1) {
//       console.log("mun");
//     } else {
//       console.log("bish");
//     }
//   } else {
//     console.log("anhnii too bish");
//   }
// }
// anhniiToo();

// bodlogo 7 palidrooe too esehiig shalgah

//bodlogo loop 11
function palidrome() {
  let n = Number(prompt("too oruulna uu"));
  let sum = 0;
  let num = 0;
  while (n > 0) {
    let negj = n % 10;
    n = (n - negj) / 10;
    while (negj > 0) {
      num = num * 10 + negj;
      negj = negj * 0;
    }
  }
  console.log(num);
  console.log(n);
}
palidrome();
