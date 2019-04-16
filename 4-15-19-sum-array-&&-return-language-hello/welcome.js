const languageDatabase = {
	english: 'Welcome',
	czech: 'Vitejte',
	danish: 'Velkomst',
	dutch: 'Welkom',
	estonian: 'Tere tulemast',
	finnish: 'Tervetuloa',
	flemish: 'Welgekomen',
	french: 'Bienvenue',
	german: 'Willkommen',
	irish: 'Failte',
	italian: 'Benvenuto',
	latvian: 'Gaidits',
	lithuanian: 'Laukiamas',
	polish: 'Witamy',
	spanish: 'Bienvenido',
	swedish: 'Valkommen',
	welsh: 'Croeso'};

// console.log(languageDatabase);

function greet(language) {
	if (languageDatabase[language]) {
		return languageDatabase[language];
	} else {
		return languageDatabase['english'];
	}
}

console.log(greet('flemish'));

//This is just an example of typeof things.
// var booleanValue = true;
// var numericalValue = 354;
// var stringValue = "This is a String";
// var stringObject = new String( "This is a String Object" );
// console.log(typeof booleanValue) // displays "boolean"
// console.log(typeof numericalValue) // displays "number"
// console.log(typeof stringValue) // displays "string"
// console.log(typeof stringObject) // displays "object"

