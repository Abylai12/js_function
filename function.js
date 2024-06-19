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

// function palidrome() {
//   let n = Number(prompt("too oruulna uu"));
//   let sum = 0;
//   let num = 0;
//   let huulvar = n;
//   while (n > 0) {
//     let negj = n % 10;
//     n = (n - negj) / 10;
//     while (negj > 0) {
//       num = num * 10 + negj;
//       negj = negj * 0;
//     }
//   }
//   if (huulvar === num) {
//     sum = "true";
//   } else {
//     sum = "false";
//   }

//   console.log(sum);
//   return sum;
// }
// palidrome();

// bodlogo 8 ugugdsun string urvuulna gargah
// function palidrome() {
//   let num = "";

//   let n = prompt("ug oruulna uu");
//   for (let i = n.length - 1; i >= 0; i--) {
//     num += n[i];
//   }
//   console.log(num);
//   return num;
// }
// palidrome();
// bodlogo 9

// let students = [
//   {
//     name: "Сэд-Эрдэнэ",

//     age: 19,

//     gender: "male",

//     points: 70,
//   },

//   {
//     name: "Индра",

//     age: 19,

//     gender: "female",

//     points: 50,
//   },

//   {
//     name: "Хатнаа ",

//     age: 21,

//     gender: "male",

//     points: 99,
//   },

//   {
//     name: "Тэмүүлэн",

//     age: 23,

//     gender: "male",

//     points: 55,
//   },

//   {
//     name: "Намуун",

//     age: 23,

//     gender: "female",

//     points: 85,
//   },
// ];
//Эхний объектыг хэвлэж гаргах
// console.log(students[0]);
// Ангид хэдэн эрэгтэй , эмэгтэй сурагч байгааг олох object буцаадаг функц бичих
// function gender(students) {
//   let word = "male";
//   let num = 0;
//   let sum = 0;

//   for (let i = 0; i < students.length; i++) {
//     if (word === students[i].gender) {
//       num++;
//       sum = students.length;
//     }
//   }
//   let emegtei = sum - num;
//   return { male: num, female: emegtei };
// }
// let c = gender(students);
// console.log(c);

// Сурагчдын насны дунджийг олох функц бичих

// function gender(students) {
//   let word = 0;
//   // let num = 0;
//   let sum = 0;

//   for (let i = 0; i < students.length; i++) {
//     word += students[i].age;
//     sum = students.length;
//   }

//   let age = word / sum;
//   return age;
// }
// let c = gender(students);
// console.log(c);

// Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол

// function gender(students) {
//   let word = 0;
//   // let num = 0;
//   let sum = " ";

//   for (let i = 0; i < students.length; i++) {
//     if (students[i].age >= 21) {
//       sum += " " + students[i].name;
//     }
//   }

//   return sum;
// }
// let c = gender(students);
// console.log(c);

// 60-аас дээш оноо авсан cурагчдийг тоол

// function gender(students) {
//   let sum = 0;

//   for (let i = 0; i < students.length; i++) {
//     if (students[i].points > 60) {
//       sum++;
//     }
//   }

//   return sum;
// }
// let c = gender(students);
// console.log(c);

// Extra assignment
// bodlogo 1
// Ugugdsun array iin hamgiin tom, hamgiin bagiin olj, dundajiin olj, min, max, avg gsn 3 utag butsaadag function bichih
let arr = [1, 2, 3, 4, 5];
function arrOperator(array) {
  let a = 0;
  let sum = 0;
  // let avg = 0;
  let max = Math.max(...array);
  let min = Math.min(...array);
  for (let i = 0; i < array.length; i++) {
    a = array.length;
    sum += array[i];
  }
  let avg = sum / a;
  return { min: min, max: max, avg: avg };
}
let c = arrOperator(arr);
console.log(c);

// bodlogo 2
//Ugugdsun zahialguudiin niit borluulaltiin dun oldog function bichih.

const orders = [
  {
    orderId: 1,
    items: [
      { itemName: "Apple", price: 1 },
      { itemName: "Banana", price: 2 },
    ],
  },
  {
    orderId: 2,
    items: [
      { itemName: "Orange", price: 1.5 },
      { itemName: "Grapes", price: 3 },
    ],
  },
  {
    orderId: 3,
    items: [
      { itemName: "Orange", price: 1.5 },
      { itemName: "Grapes", price: 3 },
    ],
  },
];
function orderedItems(order) {
  let a = 0;
  let b = 0;

  for (let i = 0; i < order.length; i++) {
    a = order[i].items;
    // console.log(a);
    for (let j = 0; j < a.length; j++) {
      b += order[i].items[j].price;
      // console.log(b);
    }
    // a += order[0].items[i].price;
    // b += order[1].items[i].price;
  }
  // console.log(a);
  // console.log(b);

  return b;
}
let result = orderedItems(orders);
console.log(result);

// bodlogo 3
// Ugugdsun array iin anhnii utagtai bolon квадрат, куб iin oldog function bichih. jishee ni: input [1, 2, 3, 4, 5]
let arrMath = [1, 2, 3, 4, 5];
function arrSquare(andaa) {
  let a = 0;
  let orgn = 0;
  let sqr = 0;
  let cube = 0;
  let b = [];

  for (let j = 0; j < andaa.length; j++) {
    // console.log("a", a);
    orgn = andaa[j];
    sqr = andaa[j] * andaa[j];
    cube = andaa[j] * andaa[j] * andaa[j];
    a = {
      original: orgn,
      pow: sqr,
      cube: cube,
    };
    b.push(a);

    // console.log(a);
  }
  return b;
}
let dun = arrSquare(arrMath);
console.log(dun);

// bodlogo 4
// Ugugdsun company iin data aas hamgiin ih tsalintai ajiltang oldog function bichih.

const company = {
  name: "TechCorp",
  address: "123 Silicon Valley",
  employees: [
    { name: "Alice", salary: 90000 },
    { name: "Bob", salary: 120000 },
    { name: "Charlie", salary: 110000 },
  ],
};
function salaryMax(office) {
  let ajilchid = office.employees;
  let maxSalary = ajilchid[0].salary;
  let maxSalaryName = "";
  for (let i = 0; i < ajilchid.length; i++) {
    if (ajilchid[i].salary > maxSalary) {
      maxSalary = ajilchid[i].salary;
      maxSalaryName = ajilchid[i].name;
    }
  }

  console.log(maxSalaryName);
}
salaryMax(company);
