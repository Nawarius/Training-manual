let button = document.getElementById("button");
let input = document.getElementById("input");

button.addEventListener('click', () => {
	getImagePromise(input.value)
});
let ID = [];

let taskText = document.getElementById("taskText");
let pushTaskButton = document.getElementById("taskButton");
let deleteTaskButton = document.getElementById("deleteButton");
let getTaskButton = document.getElementById("getTask");
let numberTask = document.getElementById("numberTask");
let updateButton = document.getElementById("updateButton");

updateButton.addEventListener('click',()=>{
	updateTask(numberTask.value,ID[ID.length-1],taskText.value)
})
deleteTaskButton.addEventListener('click',()=>{
	deleteTask(numberTask.value,ID[ID.length-1])
});
pushTaskButton.addEventListener('click', () => {
	pushTask(numberTask.value, taskText.value)
});
getTaskButton.addEventListener('click', () => {
	getTaskPromise(numberTask.value)
});

function getTaskPromise(id) {
	const promise = getTask(id);
	promise.then((responce) => {
		taskAddHtml(responce)
	})
}

function taskAddHtml(text) {
	let i = 0;
	text.map(el=>{
		i==0?i:i++;
		let task = document.createElement('div');
		task.innerHTML = el.title; 
		ID[i] = el.id;
		document.querySelector('body').appendChild(task);
	})
}


function getImagePromise(pageNumber) {
	const promise = getImages(pageNumber);
	promise.then((responce) => {
		imagePush(responce);
	})
}

function imagePush(data) {
	data.forEach(el => {
		let img = document.createElement('img');
		img.src = el.thumbnail;
		document.querySelector('body').appendChild(img);
	})
}