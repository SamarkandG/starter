const country = "France";
const continent = "Europe";
let population = 65;

// console.log(country, continent, population);

const isIsland = false;
const language = "French";

// console.log(isIsland);
// console.log(population);
// console.log(country);
// console.log(language);

/*Split in half the country*/
// console.log(population / 2);
/*Increase population by 1*/
// population++;
// console.log(population);

/*Is Finland population bigger than France population ?
PREMIERE SOLUTION*/
// let finlandPopulation = 6;
// console.log(population > finlandPopulation);

/*Is Finland population bigger than France population ?
DEUXIEME SOLUTION*/

// console.log(population >= 6);

//Does France have less people than the average country?
// console.log(population <= 33);

const description =
  country +
  " " +
  "is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language +
  ".";

console.log(description);
