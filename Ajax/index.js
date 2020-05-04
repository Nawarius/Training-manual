let button = document.querySelector("button");
let input = document.querySelector("input");
button.addEventListener('click', () => {getImages(input.value, successData)});

function successData (data) {
		data.forEach (el => {
		let img = document.createElement('img');
		img.src = el.thumbnail;
		document.querySelector('body').appendChild(img);
		}
	 )
 }
