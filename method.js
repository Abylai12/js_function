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
  let a = 0;
  for (let i = 0; i < myGreeting.length; i++) {
    let myGreeting = "the quick brown fox";
    let capFirstLetter = myGreeting[i].toUpperCase();

    console.log(capFirstLetter);
    let restOfGreeting = myGreeting.slice(1);

    console.log(restOfGreeting);
    //returns the string 'ello'
    let newGreeting = capFirstLetter + restOfGreeting;

    console.log(newGreeting);
    //Hello
  }
}
upperCase();
