//My solution.
const arrayOne = [1,2,3,5,8,13,21,34].reduce(function(accumulator, currentValue, currentIndex, array) {
	return accumulator * currentValue;
});
console.log(arrayOne);

///////////////////////////////////////////////////////////////////////////////////////
//Georgie's solution
const array = [1,2,3,5,8,13,21,34]
	arrayTwo = array.reduce(function(accumulator, currentValue, currentIndex, array) {
	console.log(arrayTwo);
		return accumulator * currentValue;
});

//accumulator: updates as go through array and math of function.
//current value:
//current index: where currently located in the array.
//source array: original array your working with
//notice the use of the words accumulator, currentValue etc. is not required.
//Ex. from MDN
const array1 = [1, 2, 3, 4];
const reducer = (assimilator, individual) => assimilator * individual;

// 1 * 2 * 3 * 4
console.log(array1.reduce(reducer));
// expected output: 24

// 5 * 1 * 2 * 3 * 4
console.log(array1.reduce(reducer, 5));
// expected output: 120

///////////////////////////////////////////////////////////////////////////////////////
//BELOW IS EXAMPLE OF A FOR LOOP THAT ADDS THE VALUES
var total = 0;
var numbers = [1, 5, 7, 3, 8, 9];
for ( var i = 0; i < numbers.length; i++ ){
	total += numbers[i];
}
console.log(total);

var message = "";
var words = ["reducing", "is", "simple"];
for ( var i = 0; i < words.length; i++ ){
	message += words[i];
}
console.log(message);