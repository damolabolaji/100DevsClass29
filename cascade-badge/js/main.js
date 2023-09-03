//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

let arr = ["Pikachu", "chamander", "caterpie", "yonsie"];

function reversePokemons(array) {
  return array.reverse();
}
// console.log(reversePokemons(arr));

//shuffle all the pokemeon so she doesnt know your battle strategy
function randomShuffle(array) {
  //generat random numbers for the array indices

  //create an array and save each random number generated into the array
  let randomArray = [];
  for (let i = 0; i < array.length; i++) {
    let randomNum = Math.floor(Math.random() * array.length);

    //conditional to check if the random number is not duplicated in gthe array
    if (!randomArray.includes(randomNum)) {
      randomArray.push(randomNum);
    } else i--;
  }
  console.log(randomArray);
  for (let j = 0; j < array.length; j++) {
    //[1,2,3,0]
    storedpokemon = array[randomArray[j]]; //chamander j=0
    array[randomArray[j]] = array[j]; //put pikachu at array[1] where chamander is was
    //pikachu,pikachu,caterpie,yonsie
    array[j] = storedpokemon;
    //chamander,pikachu,caterpie,yonsie

    //SECOMD TIME AROUND j=1
    //store caterpie
    //chamander,pikachu,pikachu,yonsie   //chamander,caterpie,pikachu,yonsie

    //THIRD TIME AROUND j=2
    //store what is at array[3]-- yonsie
    //chamander,caterpie,pikachu,pikachu   //chamnadr,caterpie,yonsie,pikachu

    //THIRD TIME AROUND j=3
    //store array[0] --chamandr
    //pikachu,caterpie,yonsie,pikchu // pikachu,caterpie,yomsi,chamader
  }

  return array;
}

console.log(randomShuffle(arr));
//random number between min and max
// function printRandomRange(min, max) {
//   return Math.floor(Math.random() * (1 + max - min)) + min; // adding 1 makes it include the max value
// }
// console.log(printRandomRange(5, 15));

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater
//than the sum of the cubes of each element in b.
//get the sum of the squares of a
//get the sum of the cubes of b
function getSquares(arr) {
  return arr.map((item) => {
    item ** 2;
  });
}

console.log(getSquares([1, 2, 3]));
const myArray = [1, 2, 3];

function squaredIt(arr) {
  return arr.map((item) => item ** 2);
}

console.log(squaredIt(myArray));
//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
