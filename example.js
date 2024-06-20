// function mostSellProduct(sellData) {
//   let mostSell = 0;
//   let mostFive = [];

//   for (let i = 0; i < sellData.length; i++) {
//     mostSell = sellData[i].amount;
//     console.log(mostSell);
//     mostFive.push(mostSell);
//   }

//   mostFive.sort(function (a, b) {
//     return b - a;
//   });

//   let five = mostFive.slice(0, 5);
//   console.log(five);
//   // return mostSell;
//   for (let i = 0; i < five.length; i++) {
//     let a = sellData[i].amount.includes(five[0]);
//     console.log(a);
//   }
// }
// let resultMost = mostSellProduct(data);
// console.log(resultMost);
