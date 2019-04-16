// using fetch display posts fro jsonplaceholder.com onto the dom (https://jsonplaceholder.typicode.com/posts)
// https://developers.google.com/web/ilt/pwa/working-with-the-fetch-api
// 	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
/****************************************************************************************/


//optional, but useful to console log the data from the original request
function logResult(result) {
	console.log(result);
}

//this will occur if there was no network connection, but not if the response was bad
function logError(error) {
	console.log('Looks like there was a problem: \n', error);
}

//checks if the response is valid for non 200-299 responses. Throws an error stopping bad responses from continuing down the fetch chain. In this case it throws the error containing response.statusText that triggers the catch block.
function validateResponse(response) {
	//response ok evaluates the status of the response
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

//reads the body of the response using the response.text() method. This method returns a promise that resolves to text. Once resolved it is passed to the next method...
function readResponseAsText(response) {
	return response.text();
}


function showText(responseAsText) {
	// creates a variable assigned to the html element with the id "message"
	var message = document.getElementById('message');
	//places a string in said element equivalent to whatever is passed as the responseAsText
	message.textContent = responseAsText;
}

function fetchText(pathToResource) {
	//fetch is called on a resource, passing the path for the resource we want to retrieve  Fetch returns a promise that will resolve to a response object.
	fetch(pathToResource)
	//when the promise resolves, the response object is passed through each of these...
		.then(validateResponse)
		.then(readResponseAsText)
		.then(showText)
		.then(logResult)
		//if the request doesn't complete, catch takes over and passes the corresponding error
		.catch(logError);
}

//call the fetchText function for the resource parameter.
fetchText('https://jsonplaceholder.typicode.com/posts');
//alternatively could have placed the text in a text file and grabbed that. (ex. see words.txt)
