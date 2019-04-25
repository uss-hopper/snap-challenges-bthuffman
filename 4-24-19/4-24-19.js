/////Convert various weights into grams
function convertToGrams (amount, measureOfWeight) {
	let weightInGrams = 0;
	if (measureOfWeight === "lbs" || measureOfWeight === "Lbs") {
		weightInGrams = amount/0.00220462;
		return weightInGrams;
	}
	else if (measureOfWeight === "oz" || measureOfWeight === "Oz") {
		weightInGrams = amount/0.035274;
		return weightInGrams;
	}
	else if (measureOfWeight === "kg" || measureOfWeight === "Kg") {
		weightInGrams = amount/0.001;
		return weightInGrams;
	}
	else if (measureOfWeight === "g" || measureOfWeight === "G") {
		weightInGrams = amount;
		return weightInGrams;
	}
	else if (measureOfWeight === "mg" || measureOfWeight === "Mg") {
		weightInGrams = amount*0.001;
		return weightInGrams;
	}
	else {
		return "No comparable metric provided.";
	}
}

console.log(convertToGrams(1,"Lbs"));
console.log(convertToGrams(1,"oz"));
console.log(convertToGrams(1,"kg"));
console.log(convertToGrams(1,"G"));
console.log(convertToGrams(1,"Mg"));
console.log(convertToGrams(1," "));

//find the sum of all unique positive factors of a number (factors being numbers that divide evenly into it) Ex. the factors of 12 are 1, 2, 3, 4, 6, and 12 whose sum total 28.
function sum(numbers) {
	// shift pops off the first value of the array which is then added the sum function (recurssion)
	return numbers.length == 0 ? 0 : numbers.shift() + sum(numbers);
}

function sumFactors (number) {
	if (isNaN(number))  {
		return "Must enter a valid integer.";
	} else {
		let arrayOfFactors = [];
		//this would create a new array starting with index 0 a value of 0, when we want it to count up to the number provided. Therefore, we need the following uncommented out line of code
		// let newArray =new Array (number);
		//the plus one here insures that we count 0 and all the way up to the number
		let newArray = [...Array(number+1).keys()]
		for(index = 0; index < number; index++) newArray[index] = index;
		// console.log(newArray);
		for (i=0; i<newArray.length; i++) {
			if (number%i === 0) {
				arrayOfFactors.push(i);
			}
		}
		return sum(arrayOfFactors);
	}
}

console.log(sumFactors(12));

console.log(sumFactors("twelve"));

////////HUNTER'S SOLUTION//////////////////////////////////////////////////////////////////////////////////////////
function factorSummer(num) {
	let arr = [];
	for(let i = 1; i <= num; i++) {
		if(num % i === 0) {
			arr.push(i);
		}
	}
	return arr.reduce((a, b) => a + b);

}

console.log(factorSummer(12));