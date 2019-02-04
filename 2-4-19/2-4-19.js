//Sets the string equal to the variable str
let str = "Fate protects fools, little children and ships named Enterprise. You're going to be an interesting companion, Mr. Data. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Why don't we just give everybody a promotion and call it a night - 'Commander'? Well, that's certainly good to know. Mr. Worf, you do remember how to fire phasers? A lot of things can change in twelve years, Admiral.";

//Creates an array assigned to the variable words with the seperator being the space between characters (thus targeting words, if no space was in the '' then it would target each character as an element for the new array).
let words = str.split(' ');

console.log(words);

let wordZ = words.map(v => v.toLowerCase());
console.log(wordZ);

const startsWithF = words.filter(word => !(word.startsWith ("f")|| word.startsWith("F")));

console.log(startsWithF);

//const newArray = wordZ.filter(element => element.string !=startsWithF);

// console.log(newArray);

//no affect
function noFWords (element) {
	return element !== startsWithF;
}

let filtered = wordZ.filter(noFWords);

// console.log(filtered);