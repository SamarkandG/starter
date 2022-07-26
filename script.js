/*let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Samarkand");
console.log(23);

let firstName = "Samarkand";
console.log(firstName);

//Je fais n'importe quoi dans les commentaires
*/
// let jsIsFun = true;
// console.log(jsIsFun);

// console.log(typeof true);
// console.log(typeof jsIsFun);
// console.log(typeof 12);
// console.log(typeof "Sam");

// jsIsFun = "YES!";
// console.log(jsIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1995;
// console.log(year);
// console.log(typeof year);

// let age = 25;
// age = 26;

// const birthYear = 1995;
// birthYear = 1998;

// console.log(ageSamarkand, ageSimon);
// console.log(ageSamarkand * 2, ageSamarkand / 10, 2 ** 3);
// // 2**3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Samarkand";
// const lastName = "Guinot";

// console.log(firstName + " " + lastName);

// let x = 10 + 5; //15
// x += 10; // x (valeur d'au dessus) = x + 10
// x *= 4; // x (valeur d'au dessus) = x * 4
// x++; // ajoute 1 à la valeur d'au dessus
// x--; // enlève 1 à la valeur d'au dessus
// console.log(x);

// // Comparaison operators pour les boleans !

// console.log(ageSamarkand > ageSimon); // >,<,>=,<=
// console.log(ageSimon >= 18);

// const isFullAge = ageSimon >= 18;

// console.log;

// const now = 2030;
// const ageSamarkand = now - 1995;
// const ageSimon = now - 2002;

// console.log(now - 1995 > now - 2002);

// let x, y;
// x = y = 25 - 10 - 5; // x=10 et y=10
// console.log(x, y);

// const averageAge = (ageSamarkand + ageSimon) / 2;
// console.log(ageSamarkand, ageSimon, averageAge);

// const firstName = "Samarkand";
// const job = "web developer";
// const birthYear = 1995;
// const year = 2022;

// const sam =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + " !";

// console.log(sam);

// const samNew = `I'm ${firstName}, a ${year - birthYear} years old ${job} !`;
// console.log(samNew);

// console.log("String with \n\
// multiple \n\
// Lines");

// console.log(`ezfez
// fefez
// fezffz`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sycile can start driving license !🚗 ");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(
//     `Sycile cannot start her driving license yet ... 😔 But will be able to in ${yearsLeft} years ! 🙃 Hang in there !`
//   );
// }

// const birthYear = 1995;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// CONVERSION

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(String(23), 23);

// COERCION
// JS anticipe et comprends qu'il dois mettre 23 en string et pas en nombre dans cette string !
// Avec une opération avec des soustractions même si les chiffres sont en string,il va les mettre en nombre !

// console.log("I am " + 23 + " years old");

// Ca affiche "false" lorsque l'on met 0 ou que l'on assigne aucune value(undefined) dans une variable et dans les conditions IF/ELSE, la console essaie de transformer en bolean la request donc forcément ça affiche faux et donc 0 = no money !

// const money = 0;
// if (money) {
//   console.log("MONEYYYY");
// } else {
//   console.log("NO MONEYYY :')");
// }

// let height;

// if (height) {
//   console.log("yay");
// } else {
//   console.log("nooooo");
// }

// const age = "18";
// if (age === 18) console.log("You just became an adult !(strict)");
// if (age == 18) console.log("You just became an adult !(loose)");

// Get value from webpage

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);

// if (favorite === 18) {
//   console.log("COOL!");
// } else if (favorite === 8) {
//   console.log("8 is also cool !");
// } else if (favorite === 4) {
//   console.log("4 is also cool !");
// } else {
//   console.log("Not the right number :'(");
// }

// if (favorite !== 18) console.log("Why not 18 ?");

//Est ce qu'elle est en capacité de conduire ? Elle dois avoir le permis, une bonne vue et ne PAS être fatiguée !

// const hasDrivingLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDrivingLicense && hasGoodVision);
// console.log(hasDrivingLicense || hasGoodVision);
// console.log(!hasDrivingLicense);

// const isTired = true; //C
// console.log(hasDrivingLicense && hasGoodVision && isTired);

// if (hasDrivingLicense && hasGoodVision && !isTired) {
//   console.log("She's able to drive");
// } else {
//   console.log("Someone else should drive !");
// }
