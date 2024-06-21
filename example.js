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
// time convert
// const convertTime12to24 = (time12h) => {
//     let [hours, minutes, second] = time12h.split(":");
//     let orgSec = second[0] + second[1];
//     let muj = second.includes("PM");
//     let orgHour = Number(hours[0] + hours[1]);
//     if (hours == 12 && muj === false) {
//       hours = "00";
//       return `${hours}:${minutes}:${orgSec}`;
//     }
//     if (muj === true && hours != 12) {
//       orgHour += 12;

//       return `${orgHour}:${minutes}:${orgSec}`;
//     }
//     if (muj == true && 12 == hours) {
//       return `${hours}:${minutes}:${orgSec}`;
//     }
//     if (muj == false) {
//       return `${hours}:${minutes}:${orgSec}`;
//     }
//   };

//   let hugatsaa = convertTime12to24("06:45:54AM");
//   console.log(hugatsaa);
