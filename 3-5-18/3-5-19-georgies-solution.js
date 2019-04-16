//Using the array filter prototype filter out all the words that start with the letter e.

const arrayOne =
	"Ensign Babyface! Your shields were failing, sir. This should be interesting. Your head is not an artifact! What's a knock-out like you doing in a computer-generated gin joint like this? Why don't we just give everybody a promotion and call it a night - 'Commander'? But the probability of making a six is no greater than that of rolling a seven. What? We're not at all alike! I recommend you don't fire until you're within 40,000 kilometers. Wouldn't that bring about chaos? Flair is what marks the difference between artistry and mere competence.";
//explode the string into an array, get rid of non-letter characters and then make spaces between the words (otherwise the following function would only target the characters E instead of all words starting with E.
const arrayTwo = arrayOne.replace(/[\W_]+/g," ".split(" "));

//
const newWords = arrayOne.filter(word => {
	return word.charAt(0).toLowerCase() !== "e";
});

newWords.join(" ");
console.table(newWords);

