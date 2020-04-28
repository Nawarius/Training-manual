// Rest
//Метод reduce() применяет функцию reducer к каждому элементу массива слева направо и возвращает одно результирующее значение
/*const arr = [1,2,3,4,5];
const reducer = (accumulator,currentValue) => accumulator + currentValue;

console.log(arr.reduce(reducer,0));*/
// Rest
/*function average(arr){
    return arr.reduce((acc,i) => acc+=i,0) / arr.length;
}
console.log(average([10,20,30,40]))*/
///////
// function average(...arr){
//     return arr.reduce((acc,i) => acc+=i,0) / arr.length;
// }
// console.log(average(10,20,30,40));

//Spread

// const arr = [1,2,3,5,8,13];
// console.log(...arr);
// console.log(Math.max(...arr));
// const fib = [1,...arr];
// console.log(fib);

//Destructuring

// const arr = [1,undefined,3,4,5];

// const a = arr[0];
// const b = arr[1]; Вместо этого можно использовать нижеприведенный код

// const [a,b = 42,...c] = arr; //Можно задавать значения по умолчанию
// console.log(a,b,c)


//Objects

const adress = {
    country:'Russia',
    city:'Moscow',
    //street:'Lenina',
    concat: function (){
        return `${this.country} ${this.city} ${this.street}`
    }
}

// const {city,street = 'Pushkina',concat: adressConcat} = adress; // МОжно задавать значения по умолчанию
// console.log(adressConcat.call(adress));
// console.log(street);

//console.log(adress.concat());

const {city, ...rest} = adress;

console.log(city);
console.log(rest);
const newAdress = {...adress, city : 'Saint Petersburg', tresini:true};
console.log(newAdress);//Копия объекта,
