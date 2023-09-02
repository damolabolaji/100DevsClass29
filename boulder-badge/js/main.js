// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once.
//You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7,
//and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies
//each of your pokemon would need to evolve(rare candies increase your level by one).Finally, create a fourth variable
//named totalCandies that sums all the rare candies you would need.

const bulbasaurCandies = 11;
const weedleCandies = 6;
const caterpieCandies = 7;
let totalCandies = bulbasaurCandies + weedleCandies + caterpieCandies;

//create a function that tells you when they are ready to evolve, if its not ready, its says 'not ready'

let balbaaur = 5;
let caterpie = 1;
let weedle = 1;

const balbasaurText = document.querySelector(".balbasaur");
const caterpieText = document.querySelector(".caterpie");
const weedleText = document.querySelector(".weedle");

document.querySelector("button").addEventListener("click", levelUp);

function levelUp() {
  balbaaur += 1;
  caterpie += 1;
  weedle += 1;
  if (balbaaur >= 16) {
    balbasaurText.innerHTML = "Evolve!";
  } else {
    balbasaurText.innerHTML = "not yet";
  }
  if (caterpie >= 7) {
    caterpieText.innerHTML = "Evolve!";
  } else {
    caterpieText.innerHTML = "not yet";
  }
  if (weedle >= 7) {
    weedleText.innerHTML = "Evolve!";
  } else {
    weedleText.innerHTML = "not yet";
  }
  if (balbaaur >= 16 && caterpie >= 7 && weedle >= 7) {
    document.querySelector(".ready").innerHTML = "LET'S BATTLE!!";
  }
}

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius.
//Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle

function convertToCelcius(num) {
  return ((num - 32) * 5) / 9;
}

function chamanderBattle(num) {
  if (convertToCelcius(num) > 0) {
    console.log("charmander can battle");
  } else console.log("charmander cant battle");
}

chamanderBattle(43);

//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon.
//Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function choosePikachu(num) {
  for (let i = 0; i < num; i++) {
    console.log("Pikachu I choose you");
  }
}

choosePikachu(Number(prompt("how many pokemon do you have to battle")));
