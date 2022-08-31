// declare function: bị hoisting -> khai báo sau gọi trước đc
// anonymous function: không bị hoisting -> gọi sau khi khai báo
// IIFE: immediately invoked function execution:
// var bị hoisting -> không thể là block scope, vẫn có thể khai báo function scope

// IIFE
(function () {
	console.log("Hello");
})();

// anonymous function:
const calculateValue = function (a, b) {
	let result = a + b * 2;
	return result;
};

// global scope, function scope

console.log(calculateValue(1, 2));

let myName = "tranbao";

function test() {
	var x = 2;
	if (myName === "tranbao") {
		var myPet = "Dog";
	}
	console.log(myPet);

	return 5;
}

test();

console.log(myName);

// block scope
if (true) {
	var myVar = 1;
	let myVar1 = 1;
	const xy = 5;
}

console.log(myVar);

// closure
