//turn the array below into a bootstrap card deck using javascript map.

let firstArray =
	[{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{"userId":1,"id":4,"title":"eum et est occaecati","body":"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{"userId":1,"id":5,"title":"nesciunt quas odio","body":"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"}];

let titleMappedArray = firstArray.map(function(element) {return element.title;});

console.log(firstArray);

//select all divs and put them in an object
let divs = document.querySelectorAll("div");

//////////////////////////////////////////////////////////////////////
// Object.entries(divs).map((object) => { console.log(object) });
//
// /* Add event listeners to all elements by hand */
//
// divs[0].addEventListener("click", function() {
// 	console.log("Hello " + this + " (" + this.innerHTML + ") from event listener [0]");
// 	/* Here, "this" refers to 1st div */
// });
//
// divs[1].addEventListener("click", function() {
// 	console.log("Hello " + this + " (" + this.innerHTML + ") from event listener [1]");
// 	/* Here, "this" refers to 2nd div */
// });
//
// divs[2].addEventListener("click", function() {
// 	console.log("Hello " + this + " (" + this.innerHTML + ") from event listener [2]");
// 	/* Here, "this" refers to 3rd div */
// });
//////////////////////////////////////////////////////////////////
//THIS SECTION DOES THE SAME THING AS THE ABOVE COMMENTED OUT CODE

/* Walk through the entire set of items in a HTMLCollection
   by first converting it to an Array using Object.entries */

Object.entries(divs).map(( object ) => {

	// Here, object = Array[index, object] (object is the
	// HTML element object). This means that the actual element
	// is stored in object[1], not object. Do whatever you need
	// with it here. In this case we attach a click event:

	object[1].innerText = titleMappedArray;
		});
		// Output innerHTML of the clicked element
		// document.write("Hello " + this +
		// 	" (" + this.innerHTML + ") from map method...");


