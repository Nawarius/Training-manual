console.log("Request data...");

//setTimeout(() => {
//	console.log("Preparing data...");
//	const backendData = {
//		server: "nginx",
//		port:3000,
//		status: "Working"
//	}
//	setTimeout(() => {
//		backendData.modified = true;
//		console.log("Data received", backendData);
//	},2000)
//},2000)
// Resolve вызывается, когда асинхронная операция окончена! Мы говорим промису, что он завершил свое выполнение. В resolve() можно аргументом передавать какие то данные из конструктора промиса. Они окажутся в коллбэке p.then((ЗДЕСЬ)=>{}) 
// p.then(callbackFunc) выполнится, когда промис дойдет до resolve()
const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Preparing data...");
		const backendData = {
			server: "nginx",
			port: 3000,
			status: "Working"
		};
		resolve(backendData);
	}, 2000);
});

p.then(data => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				data.modified = true;
				resolve(data);
			}, 2000)
		})
	})
	.then((clientData) => {
		console.log("Data received", clientData);
		clientData.fromPromise = true;
		return clientData;
	})
	.then((clientData2) => {
			console.log('Modified', clientData2);
	})
	.catch(err => {
		console.error('Error', err);
	})
	.finally(() => console.log('Finally')) // В любом случае будет вызываться вне зависимости от того есть ли ошибка
	
const sleep = ms => {
	return new Promise(resolve=>{
		setTimeout(()=>resolve(),ms)
	})
}

Promise.all([sleep(5000),sleep(5000)]).then(()=>{//Выполнится, когда все промисы выполнятся
	console.log('All promises')
})
Promise.race([sleep(1000),sleep(5000)]).then(()=>{//Выполнится, когда самый быстрый промис выполнится
	console.log('Race promises')
})
//p.then((data) => {
//	const p2 = new Promise((resolve, reject) => {
//		setTimeout(() => {
//			data.modified = true;
//			resolve(data);
//		}, 2000)
//	})
//	p2.then(() => {
//		console.log("Data received", data);
//	})
//})