// Sum Numbers
function sum (numbers) {
  // see if the array is empty and if so return 0
  if (numbers === undefined || numbers.length == 0) {
    return 0;
} else {
  // create a variable that
	return numbers.reduce((a,b) => a +b )
}
}
console.log(sum([1, 5.2, 4, 0, -1]));

///////////////////////////////////////////////////////////////
//Will Tredway's solution
// function sum (numbers) {
//   return numbers.reduce((current, accumulator) => {return current + accumulator},0);
// }

// console.log(sum([1, 5.2, 4, 0, -1]));

///////////////////////////////////////////////////////////////
//recursive solution
// function sum (numbers) {
//shift pops off the first value of the array which is then added the sum function (recurssion)
//     return numbers.length == 0 ? 0 : numbers.shift() + sum(numbers);
// };