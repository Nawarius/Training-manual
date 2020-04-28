const defaultB = 50;

const getDefault = c => c*2;

function sum (a = 15,b = defaultB){
	return a + b;
}

function rect (a = 10, b = getDefault(a)) {
	return a*b;
}
console.log(rect(5));
console.log(rect());

console.log(sum(10));
console.log(sum(20,80));
console.log(sum());
console.log(sum(1,45));