// CODING CHALLENGE NUMBER 1

// TEST DATA 1

// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

// const bmiMark = markMass / (markHeight * markHeight);
// const bmiJohn = johnMass / (johnHeight * johnHeight);

// console.log(bmiMark, bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

//  TEST DATA 2

// const markMass = 95;
// const johnMass = 85;
// const markHeight = 1.88;
// const johnHeight = 1.76;

// const bmiMark = markMass / markHeight ** 2;
// const bmiJohn = johnMass / (johnHeight * johnHeight);

// console.log(bmiMark, bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// CODING CHALLENGE NUMBER 2

// const markMass = 95;
// const johnMass = 85;
// const markHeight = 1.88;
// const johnHeight = 1.76;

// const bmiMark = markMass / markHeight ** 2;
// const bmiJohn = johnMass / (johnHeight * johnHeight);

// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn}).`);
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark}).`);
// }

// CODING CHALLENGE #3

// const averageScoreDolphins = (97 + 112 + 101) / 3;
// const averageScoreKoalas = (109 + 95 + 123) / 3;

// console.log(averageScoreDolphins, averageScoreKoalas);

// if (averageScoreDolphins > averageScoreKoalas) {
//   console.log("Team Dolphins WINS !");
// } else if ((averageScoreDolphins = averageScoreKoalas)) {
//   console.log(" DRAW !");
// } else {
//   console.log("Team Koalas WINS !");
// }

// if (averageScoreDolphins < 100 && averageScoreKoalas < 100) {
//   console.log("BOTH LOSERS");
// } else if (
//   averageScoreDolphins > averageScoreKoalas &&
//   averageScoreDolphins >= 100
// ) {
//   console.log("Team Dolphins WINS !");
// } else if (
//   averageScoreDolphins >= 100 &&
//   averageScoreKoalas >= 100 &&
//   averageScoreDolphins === averageScoreKoalas
// ) {
//   console.log(" DRAW !");
// } else if (
//   averageScoreKoalas > averageScoreDolphins &&
//   averageScoreKoalas >= 100
// ) {
//   console.log("Team Koalas WINS !");
// }

// STEVEN'S TIP CALCULATOR

// if (bills >= 50 || bills >= 300) {
//   const calcTip = bills * 0.15;
//   console.log(calcTip);
//   console.log("You tip 15%");
// } else {
//   const calcTip = bills * 0.2;
//   console.log(calcTip);
//   console.log("You tip 20%");
// }

const bill = 40;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill is ${bill}$, you tipped ${tip}$, your total is ${bill + tip}$ 🤑 `
);
