//create a global variable (an object) to insert into DOM (it's a virtual dom, resembles dom but not yet inserted)
var objectOne = document.createElement('div');

//targeting the id property and assigning an id value to the objectOne
objectOne.id = "myDiv";

//assigning style and inner text to the objectOne
objectOne.style.width = "200px";

objectOne.style.height = "100px";

objectOne.style.background = "green";

objectOne.innerText = "Hey there, I made it";

//add the objectOne to the DOM (targeting body, then 
document.body.appendChild(objectOne);

//create span element (object)
var objectTwo = document.createElement('span');

//add text to the span element
objectTwo.innerText = "This is a span element";

//push the span element into objectOne
document.getElementById('myDiv').appendChild(objectTwo);
