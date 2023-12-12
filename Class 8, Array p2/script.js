const newMarvelHeroes = ["Thor", "Ironman", "Spiderman"];
const newDCHeroes = ["Superman", "Flash", "Batman"];

//sepread
// newMarvelHeroes.push(...newDCHeroes);


// newMarvelHeroes.push(newDCHeroes);
// console.log(newMarvelHeroes);

// console.log(newMarvelHeroes[3][1]);


// const allHeroes = newMarvelHeroes.concat(newDCHeroes);
// console.log(allHeroes);

//spread
// const allNewHeroes = [...newMarvelHeroes, ...newDCHeroes];

// console.log(allNewHeroes);



const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const realAnotherArray = anotherArray.flat(2);
// console.log(realAnotherArray);




// console.log(Array.isArray(anotherArray));

// console.log(Array.from("Aryan Ali"));
// console.log(Array.from("Aryan Ali").length);

// console.log(Array.from({ name: "NewString" })); 


let newScore1 = 100;
let newScore2 = 200;
let newScore3 = 300;
const helo = Array.of(newScore1, newScore2, newScore3)

console.log(helo);
