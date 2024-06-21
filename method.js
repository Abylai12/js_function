// bodlogo 1
//Ugugdsun array ruu too nemj oruuldag function bich
const arrNemeh = [1, 2, 4];
function tooNemeh(givenArr, desiredNumber) {
  givenArr.push(desiredNumber);
}
tooNemeh(arrNemeh, 3);
console.log(arrNemeh);
const arrHasah = [2, 4, 5, 6];
tooNemeh(arrHasah, 78);
console.log(arrHasah);

// bodlogo 2
// array uusgeh function bich

function arrCreate(hemjees, hyzgaar) {
  let a = [];
  for (let i = 0; i < hemjees; i++) {
    a.push(Math.floor(Math.random() * hyzgaar));
  }
  return a;
}
let randomArr = arrCreate(10, 90);
console.log(randomArr);

//bodlogo 3
//Garaas too avj(prompt ashiglaj hiih), tuhain tonuudiin niilber bolon dundaj oloh function bich.

// function sumOfNumbers(number) {
//   let n = [];
//   let sum = 0;
//   let avg = 0;
//   for (let i = 0; i < number; i++) {
//     n.push(Number(prompt("too oruulna uu? ")));
//   }
//   for (let i = 0; i < n.length; i++) {
//     sum += n[i];
//   }
//   avg = sum / n.length;
//   return sum, avg;
// }
// let total = sumOfNumbers(5);
// console.log(total);

//bodlog 4
//Ugugdsun temdegt muriin buh usgiig tom useg bolgoh function bich. input: 'the quick brown fox' output: 'The Quick Brown Fox '

function upperCase(sentence) {
  let word = sentence.split(" ");
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    let firstWord = word[i];
    let firstLetter = firstWord[0].toUpperCase();
    let restWord = firstWord.slice(1);
    newWord += firstLetter + restWord + " ";
  }
  return newWord;
}

let hi = upperCase("the quick brown fox");
console.log(hi);
// bodlogo 5
//Ugugdsun temdegt muriin array iig tus buriin temdegt muriig urvuugaar butsaah shine array butsaadag function bich. input: ['hello', 'world', 'javascript', 'array'] output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']

// function reverseWord() {
// let words = prompt("tongorgoh ugee oruulna uu?");
//   let word = words.split(" ");
//   let revArr = [];
//   let revWord = "";
//   for (let i = 0; i < word.length; i++) {
//     let firstWord = word[i];
//     revWord = firstWord.split("");
//     let ug = revWord.reverse();
//     let rev = ug.join(" ");
//     revArr.push(rev);

//   }
//   return revArr;
// }

// let res = reverseWord();
// console.log(res);

// bodlogo 6
//Ugugdsun text dotor tuhain oruulsan keyword(prompt ashiglah) ni bn uu gedgiin shalgah function bich. text = 'animal world' input: animal output: true, input: cat ouput: false

// function searchWord(sentence) {
//   let words = prompt("Haih ugee oruulna uu?");
//   let word = sentence.split(" ");
//   let urDun = word.includes(words);
//   return urDun;
// }
// let hariu = searchWord("animal world");
// console.log(hariu);

// bodlogo 7
const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 100,
    totalPrice: 500000,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 183,
    totalPrice: 54.0,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "Ali Baba",
    unitPrice: 1500,
    amount: 180,
    totalPrice: 54.0,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "talh atar",
    unitPrice: 2500,
    amount: 100,
    totalPrice: 54.0,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "tsuu",
    unitPrice: 4450,
    amount: 180,
    totalPrice: 54.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Tarag",
    unitPrice: 5000,
    amount: 100,
    totalPrice: 500000,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "undug",
    unitPrice: 1000,
    amount: 500,
    totalPrice: 54.0,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "Cheese",
    unitPrice: 3000,
    amount: 253,
    totalPrice: 54.0,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "bohi",
    unitPrice: 2000,
    amount: 58,
    totalPrice: 54.0,
    casherId: 1,
    date: "2022-11-01",
  },

  {
    productName: "coca-cola",
    unitPrice: 4500,
    amount: 278,
    totalPrice: 54.0,
    casherId: 1,
    date: "2022-11-01",
  },
];
//Дараах даалгаварыг хийж гүйцэтгэнэ үү.

//1. Нийт борлуулалтын дүнг тооцоолох.
function totalSell(sellData) {
  let totalSell = 0;
  for (let i = 0; i < sellData.length; i++) {
    totalSell += sellData[i].unitPrice * sellData[i].amount;
  }
  return { "borluulaltiin dun": totalSell };
}
let resultSell = totalSell(data);
console.log(resultSell);

// 2. Нийт борлуулагдсан барааны тоог тооцоолох.

function totalProductNumber(sellData) {
  let totalProduct = 0;
  for (let i = 0; i < sellData.length; i++) {
    totalProduct += sellData[i].amount;
  }
  return { "niit borluulagdsan baraa": totalProduct };
}
let resultProduct = totalProductNumber(data);
console.log(resultProduct);

// 3. Хамгийн их зарагдсан 5 барааны жагсаалт /боруулалтын үнийн дүнгээр/ харуулах.

// function mostSellProduct(sellData) {
//   let productData = sellData.sort(function (a, b) {
//     return b.amount - a.amount;
//   });
//   const mostFive = productData.slice(0, 5);
//   const productNames = [];
//   for (let i = 0; i < mostFive.length; i++) {
//     const nameAmount = mostFive[i];
//     const productInfo = {
//       productName: nameAmount.productName,
//       amount: nameAmount.amount,
//     };
//     // Push the new object to the productsInfo array
//     productNames.push(productInfo);
//   }
//   return { productNames };
// }
// let resultMost = mostSellProduct(data);
// console.log(resultMost);

//4. Хамгийн бага зарагдсан 5 барааны жагсаалт /боруулалтын тоо хэмжээгэр/ харуулах.
function mostSellProduct(sellData) {
  let productData = sellData.sort(function (a, b) {
    return a.amount - b.amount;
  });
  const mostFive = productData.slice(0, 5);
  const productNames = [];
  for (let i = 0; i < mostFive.length; i++) {
    const nameAmount = mostFive[i];
    const productInfo = {
      productName: nameAmount.productName,
      amount: nameAmount.amount,
    };
    // Push the new object to the productsInfo array
    productNames.push(productInfo);
  }
  return { productNames };
}
let resultMost = mostSellProduct(data);
console.log(resultMost);

// time convert
const convertTime12to24 = (time12h) => {
  // const [time] = time12h.split(" ");
  // console.log(typeof time);
  // console.log(modifier);
  let [hours, minutes, second] = time12h.split(":");
  let orgSec = second[0] + second[1];
  let muj = second.includes("PM");
  let orgHour = Number(hours[0] + hours[1]);
  if (hours == 12 && muj === false) {
    hours = "00";
    return `${hours}:${minutes}:${orgSec}`;
  }
  if (muj === true && hours != 12) {
    orgHour += 12;

    return `${orgHour}:${minutes}:${orgSec}`;
  }
  if (muj == true && 12 == hours) {
    return `${hours}:${minutes}:${orgSec}`;
  }
  if (muj == false) {
    return `${hours}:${minutes}:${orgSec}`;
  }
};

let hugatsaa = convertTime12to24("06:45:54AM");
console.log(hugatsaa);
