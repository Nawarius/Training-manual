//Если у стрелочной функции только 1 аргумент, можно опустить круглые скобки
/*const cube = (a) => {
	return a**3
}
console.log(cube(2));*/

//Если в функции одна строка, которая возвращается, можно записать функцию так 
/*const cube = a => a**3;
console.log(cube(2)); 
setTimeout(()=> console.log('after 1 second'), 1000);*/

// Context Стрелочная функция вернет в this пустой объект global
// delayLog1 вернет undefined ибо this обращается к global.setTimeout
// delayLog вернет имя, ибо стрелочная функция не создает своего контекста

function log () {
	console.log(this);
};

const arrowLog = () => console.log(this);

const obj = {
	name: 'Dmitry',
	age: 28,
	log:log,
	arrowLog:arrowLog,
	/*delayLog1: function () {
		const self = this;
		setTimeout(function(){console.log(self.name)},1000)
	}*/
	delayLog: function () {
		//const self = this;
		setTimeout(()=>{console.log(this.name)},1000)
	}
};

obj.log();
obj.arrowLog();
//obj.delayLog1();
obj.delayLog();
