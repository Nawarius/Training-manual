//Создание переменных в предыдущих версиях
/*var num = 42;

num = 'str';

console.log(num);*/

//Особенность ключевого слова var. Если создать переменную внутри блока, она будет видна вне блока. Пр.
/*if (true){
	var num = 42;
}

console.log(num);*/
///////////////////////////////////////////////////////////////////
//Ключевое слово let из нового ES позволяет менять тип данных переменной. Оно не видно вне блока в котором создано
//Так же две переменные с одним именем не конфликтуют, если объявлены в разных блоках
/*let num = 42;

if (true){
	let num = 42;
	console.log('num in IF ' + num) 
}

console.log(num);*/
//////////////////////////////////////////////////////////////////
//Переменные let не могут быть объявлены после использования. var могут
/*b = 20;

console.log(b);

let b;*/
// Переменные объявленные, как const не позволяет переопределить тип данных переменной и задавать переменным другое значение
//У массивов и объектов можно менять внутреннее состояние
const obj = {firstName : 'Dmitry', age : 28};
const arr = [1,2,3,5,8];
const b = 42;

console.log(b);
console.log(arr);
console.log(obj);

obj.lastName = 'Veleyskiy'
arr.push(13);

console.log(arr);
console.log(obj);

