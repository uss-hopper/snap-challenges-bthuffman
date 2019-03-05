//Using the array filter prototype filter out all the words that start with the letter e.

let arrayOne =
"Ensign Babyface! Your shields were failing, sir. This should be interesting. Your head is not an artifact! What's a knock-out like you doing in a computer-generated gin joint like this? Why don't we just give everybody a promotion and call it a night - 'Commander'? But the probability of making a six is no greater than that of rolling a seven. What? We're not at all alike! I recommend you don't fire until you're within 40,000 kilometers. Wouldn't that bring about chaos? Flair is what marks the difference between artistry and mere competence.";
//One method that returns all letters
// function removeE (array) {
// 	return array.toLowerCase().split(' ').filter((word) => word.charAt(0) !== 'e');
// }
//
// console.log(removeE(arrayOne));
//
//
// function printNonEWords (array) {
// 	return array.toLowerCase().split('').filter((word)=> word.charAt(0) !== 'e');
// }
// let arrayTwo= printNonEWords(arrayOne);
// document.write(arrayTwo);

//better method filtering out the words
// let words = arrayOne.split(' ');
// // //
// // // console.log(words);
// // //
// // // let wordZ = words.map(v => v.toLowerCase());
// // // console.log(wordZ);
// // //
// // // const startsWithE = words.filter(word => !(word.startsWith ("e")|| word.startsWith("E")));
// // //
// // // console.log(startsWithE);

//Simplier
// first you use split to make each word targeted instead of their characters.
//str is the array targeted
let words = arrayOne.split();

//create a const that filters the string words and filters words that start with E
const startsWithE = words.filter(word=>!word.startsWith("e")||word.startsWith("E")));

console.log(startsWithE);