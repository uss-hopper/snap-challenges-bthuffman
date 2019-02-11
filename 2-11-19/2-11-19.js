//turn the array below into a bootstrap card deck using javascript map.

let firstArray =
	[{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{"userId":1,"id":4,"title":"eum et est occaecati","body":"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{"userId":1,"id":5,"title":"nesciunt quas odio","body":"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"}];

//map over the array targeting and grabbing the specific element (userId in this case)
let userIdMappedArray = firstArray.map(function(element) {return element.userId;});

// console.log(userIdMappedArray);

/* inputs from the array into the html at the userId tag
*****************************************************************************************/
//create the global variable (an object) objectOne to insert into DOM (it's a virtual dom, resembles dom but not yet inserted)
let objectOne = document.createElement('span');

//add text to the objectOne span element
objectOne.innerText = userIdMappedArray[0];

//push the span element into objectOne
document.getElementById('userId').appendChild(objectOne);

////////////////////////////////////////////////////////////////////////////////////////////
//map over the array targeting and grabbing the specific element
let idMappedArray = firstArray.map(function(element) {return element.id;});

// console.log(idMappedArray);

/* inputs from the array into the html at the id tag
*****************************************************************************************/
//create the global variable (an object) objectOneA to insert into DOM (it's a virtual dom, resembles dom but not yet inserted)
let objectOneA = document.createElement('span');

//add text to the objectOneA span element
objectOneA.innerText = idMappedArray[0];

//push the span element into objectOneA
document.getElementById('id').appendChild(objectOneA);

////////////////////////////////////////////////////////////////////////////////////////////
//map over the array targeting and grabbing the specific element
let titleMappedArray = firstArray.map(function(element) {return element.title;});

// console.log(titleMappedArray);

/* inputs from the array into the html at the title tag
*****************************************************************************************/
//create the global variable (an object) objectOneB to insert into DOM (it's a virtual dom, resembles dom but not yet inserted)
let objectOneB = document.createElement('span');

//add text to the objectOneB span element
objectOneB.innerText = titleMappedArray[0];

//push the span element into objectOneB
document.getElementById('title').appendChild(objectOneB);

////////////////////////////////////////////////////////////////////////////////////////////
//map over the array targeting and grabbing the specific element
let bodyMappedArray = firstArray.map(function(element) {return element.body;});

// console.log(bodyMappedArray);

/* inputs from the array into the html at the body tag
*****************************************************************************************/
//create the global variable (an object) objectOneC to insert into DOM (it's a virtual dom, resembles dom but not yet inserted)
let objectOneC = document.createElement('span');

//add text to the objectOneC span element
objectOneC.innerText = bodyMappedArray[0];

//push the span element into objectOneC
document.getElementById('body').appendChild(objectOneC);