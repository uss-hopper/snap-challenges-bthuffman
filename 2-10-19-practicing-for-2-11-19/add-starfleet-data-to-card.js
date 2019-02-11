let trekArray = [
	{
		"starship": "Enterprise",
		"class": "Sovereign",
		"purpose": "Fight Against Borg",
		"captain": "Picard",
		"firstOfficer": "Commander Data"
	},
	{
		"starship": "Reliant",
		"class": "Galaxy",
		"purpose": "Star Fleet Logistical and Science",
		"captain": "Tredway",
		"firstOfficer": "Commander Solmon"
	},
	{
		"starship": "Tolestoy",
		"class": "Nebula",
		"purpose": "Science and some logistics",
		"captain": "Isengard",
		"firstOfficer": "Commander Calloway"
	},
	{
		"starship": "Voyager",
		"class": "Intrepid",
		"purpose": "Science",
		"captain": "Captain Janeway",
		"firstOfficer": "Commander Chakotay"
	},
];

/* THESE MAP OVER THE ARRAY AND RETURN NEW STRING OBJECT ARRAYS WITH ONLY SELECTED ELEMENT
 * ************************************************************************************/
// console.log(trekArray);
// function pullClass(array) {
// 	let newArray = [];
// 	array.map(function(e) {
// 		return e.starship;
// 	});
// 	return array;
// }
//
// let firstMappedArray = pullClass(testArray);
//
// console.log(firstMappedArray);

let starshipMappedArray = trekArray.map(function(element) {return element.starship;});

// console.log(starshipMappedArray);

let classMappedArray = trekArray.map(function(element) {return element.class;});

// console.log(classMappedArray);

let purposeMappedArray = trekArray.map(function(element) {return element.purpose;});

// console.log(purposeMappedArray);

let captainMappedArray = trekArray.map(function(element) {return element.captain;});

// console.log(captainMappedArray);

let firstOfficerMappedArray = trekArray.map(function(element) {return element.firstOfficer;});

// console.log(firstOfficerMappedArray);
/*END
* ************************************************************************************************/
/* inputs from the array into the html test at the starship tag
*****************************************************************************************/
//create the global variable (an object) objectOne to insert into DOM (it's a virtual dom, resembles dom but not yet inserted)
let objectOne = document.createElement('span');

//add text to the objectOne span element
objectOne.innerText = starshipMappedArray[0];

//push the span element into objectOne
document.getElementById('starship').appendChild(objectOne);

/* inputs from the array into the html test at the starshipClass tag
*****************************************************************************************/
//create the global variable (an object) objectTwo to insert into DOM (it's a virtual dom, resembles dom but not yet inserted)
let objectTwo = document.createElement('span');

//add text to the objectTwo span element
objectTwo.innerText = classMappedArray[1];

//push the span element into objectTwo
document.getElementById('starshipClass').appendChild(objectTwo);

/* inputs from the array into the html test at the starshipPurpose tag
*****************************************************************************************/
//create the global variable (an object) objectThree to insert into DOM (it's a virtual dom, resembles dom but not yet inserted)
let objectThree = document.createElement('span');

//add text to the objectThree span element
objectThree.innerText = purposeMappedArray[1];

//push the span element into objectThree
document.getElementById('starshipPurpose').appendChild(objectThree);

/* inputs from the array into the html test at the starshipCaptain tag
*****************************************************************************************/
//create the global variable (an object) objectFour to insert into DOM (it's a virtual dom, resembles dom but not yet inserted)
let objectFour = document.createElement('span');

//add text to the objectFour span element
objectFour.innerText = captainMappedArray[1];

//push the span element into objectFour
document.getElementById('starshipCaptain').appendChild(objectFour);

/* inputs from the array into the html test at the starshipFirstOfficer tag
*****************************************************************************************/
//create the global variable (an object) objectFive to insert into DOM (it's a virtual dom, resembles dom but not yet inserted)
let objectFive = document.createElement('span');

//add text to the objectFive span element
objectFive.innerText = firstOfficerMappedArray[1];

//push the span element into objectFive
document.getElementById('starshipFirstOfficer').appendChild(objectFive);
