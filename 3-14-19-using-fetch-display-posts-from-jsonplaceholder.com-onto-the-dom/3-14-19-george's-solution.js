//.then relating to promise determines whether it was fulfilled or not.
function loadPosts() {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => {
			console.log(response);
			return response.json();
		})
		.then((myJson) => {
			const cards = myJson.map(index =>{
				return  `
  <div class="card">
  <div class="card-body">
      <h5 class="card-title">${index.title}</h5>
      <p class="card-text">${index.body}</p>
      </div>
  </div>
    `
			});
			let html = document.getElementById("target");
			//the r\n gets rid of commas
			html.innerHTML = cards.join("\r\n");
		});

}


//json parse, constructing the js value and constructing it into arrays, objects or strings.


//.then relating to promise determines whether it was fulfilled or not.
// fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then((response) => {
// 		console.log(response)
// 		return response.json();
// 	})
// 	.then((myJson) => {
// 		console.log(JSON.stringify(myJson));
// //these are unnecessary because the response.json handles this.
// let postsFromJsonPlaceHolder = JSON.parse(myJson)
// console.log(postsFromJsonPlaceHolder);
// 	});