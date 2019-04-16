const cardContent =  [{"userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"},{"userId":1,"id":2,"title":"qui est esse","body":"est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"},{"userId":1,"id":3,"title":"ea molestias quasi exercitationem repellat qui ipsa sit aut","body":"et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"},{"userId":1,"id":4,"title":"eum et est occaecati","body":"ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"},{"userId":1,"id":5,"title":"nesciunt quas odio","body":"repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"}];

window.onload = () => {
	let arrayToBootstrap = cardContent.map((index) => {
		return `
	<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${index.title}</h5>
    <p class="card-text">${index.body}</p>
    <a href="#" class="btn btn-primary">${index.userId}</a>
    <a href="#" class="btn btn-primary">${index.id}</a>
  </div>
</div>
	`
	});
	let insertText = document.getElementById('insertText');
	insertText.innerHtml = arrayToBootstrap.join("\r\n");
	document.write(arrayToBootstrap.toString());
};



////////////////////////////////////////////////////////////////////////////////////////////////////
// Closure have access to 'private_id'
/*
function getUserData(firstName, lastName, gender) {
	var fullName = firstName + " " + lastName;
	var private_id = '1735HKN';
	if (typeof greetUser === "function") {
		greetUser(fullName, gender);
	}
	function greetUser(customerName, gender)  {
		console.log("Hello, " + gender === "M" ? "Mr." : "Ms." + " " + customerName);
		console.log('Your id is: ' + private_id);
	}
}

//Notice, the gender portion of this seems broken
getUserData('Jagdeep','Bisht','m');
*/
////////////////////////////////////////////////////////////////////////////////////////////////////