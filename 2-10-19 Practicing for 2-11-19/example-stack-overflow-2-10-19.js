objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];

// function getFields(array, parameter) {
// 	var output = [];
// 	for (var i=0; i < array.length ; ++i)
// 		output.push(array[i][parameter]);
// 	return output;
// }
//
// var result = getFields(objArray, "foo");
//
// console.log(result);

//this achieves the same as the above code function
var resultOne = objArray.map(function(a) {return a.foo;});

console.log(resultOne);


//This returns undefined...
/*********************************************************************//*
function pullClass(array) {
	array.map(function(e) {
		return e.starship;
	});
}

let firstMappedArray = pullClass(testArray);

console.log(firstMappedArray);
******************************************************************************/
