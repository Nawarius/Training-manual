//Внутри можно писать двойные и одинарные кавычки. Чтобы вставить в строку переменную пишем ${}
/*const title = `Hello`;
const isVisible = () => Math.random() > 0.5;
const template = `
${isVisible()?`<p> Visible </p>`: ""}
<h1 id = "demo" style = 'color:red>'${title}</h1>`;

console.log(template);*/

//Methods
const str = 'Hello my'
console.log(str.startsWith('He')); // Начинается с "He". Вернет true
console.log(str.endsWith('lo')); // Коначается на "lo". Вернет true
console.log(str.includes('llo'));// Спрашивает есть ли такая подстрока в исходной строке. Вернет true
console.log(str.repeat(3));//Повторяет строку сколько то раз
str.trim()
