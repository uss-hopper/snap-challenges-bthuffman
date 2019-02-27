//My solution
//snap-reverse
//using reduce reverse this string.
const stringOne = "I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human lose as kneely as we feel one of those close to us, human history would be far less bloddy.";

let arrayOne = stringOne.split(' ');

let resultOne = arrayOne.reduce(function(prevVal, currVal, index) {
	return index == 0 ? currVal : prevVal + ' ' + currVal;
}, '')

// let resultTwo = resultOne.reverse();
// function functionOne() {
//  let stringTwo = string.reverse();
//   console.log(stringTwo);
// }

let myResult = resultOne.split(" ");
myResult.reverse();
console.log(resultOne);
console.log(arrayOne);
// functionOne(resultOne);
console.log(myResult);


//This is George's solution.
let string = "I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human lose as kneely as we feel one of those close to us, human history would be far less bloddy."

let newString = string.split(" ");

let finalString =newString.reduce((accumulator, current) => current + accumulator);

console.log(finalString);

//Another solution

const stringOne = "I think sessions are useful when compared to"

function reverse(str){
	return str.split("").reverse().join("");
}

console.log(reverse(stringOne));

//Billy solution
var arr = "I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.";

var split = arr.split(" ");

split.reduce((a, b) => [b].concat(a), []);

//** Reverse Via Reverse Method **//
var arr = "I'll alert the crew. We finished our first sensor sweep of the neutral zone. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.";

var split = arr.split(" ");
split.reverse();