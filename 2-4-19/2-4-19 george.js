//Sets the string equal to the variable str (explodes the array as george says)
let string = "Fate protects fools, little children and ships named Enterprise. You're going to be an interesting companion, Mr. Data. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Why don't we just give everybody a promotion and call it a night - 'Commander'? Well, that's certainly good to know. Mr. Worf, you do remember how to fire phasers? A lot of things can change in twelve years, Admiral.";

//Creates an array assigned to the variable words with the seperator being the space between characters (thus targeting words, if no space was in the '' then it would target each character as an element for the new array).
let array = string.toLowerCase().split(' ');

newArray = array.filter((index) => {return !index.startsWith("f")});

console.log(newArray);

//without arrow you would put (function(index) {return
//if it's only one statement don't have to write a return
//new