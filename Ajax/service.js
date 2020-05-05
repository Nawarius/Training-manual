//function getImages(input){
//	const promise = $.ajax(`https:repetitora.net/api/JS/Images?page=${input}&count=1`);
//	return promise;
//}
function getImages(input){
	const promise = axios.get(`https:repetitora.net/api/JS/Images?page=${input}&count=1`);
	return promise.then((responce)=>{
		return responce.data;
	})
}

function getTask(id){
	//alert(id);
	const promise = axios.get(`https:repetitora.net/api/JS/Tasks?widgetid=${id}`);
	return promise.then((responce)=>{
		return responce.data;
	})
}

function pushTask(id,text){
	//alert(id + " " + text)
	axios.post(`https:repetitora.net/api/JS/Tasks?`, {
		widgetid:id,
		title:text
	});
}

function deleteTask(widgetid,taskid){
	axios.delete(`https:repetitora.net/api/JS/Tasks?widgetid=${widgetid}&taskid=${taskid}`);
}
function updateTask(id, taskId, text){
	axios.put(`https:repetitora.net/api/JS/Tasks?`, {
		widgetid:id,
		taskid:taskId,
		title:text
	});
}
