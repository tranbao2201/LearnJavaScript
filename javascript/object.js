//object literal

const objectLiteral = {};

// object constructor

const objectConstructor = new Object();

const student = {
	name: "baotran",
	age: 27,
	"last-name": "John",
	getname: () => {
		return this.name;
	},
};

// get value object
console.log(student.name); // bracket  notation
console.log(student["last-name"]); // dot  notation

// set value object

student.name = "tranvanbao";
console.log(student.name);
student.isDeveloper = true;
console.log(student.isDeveloper);
student.logHello = () => console.log("hi");
console.log(student);

// delet key-valu object
delete student.name;
console.log(student);

// for in

for (let key in student) {
	console.log(student[key]);
}

// get all key object
keys = Object.keys(student);
console.log(keys);

// get all value object
values = Object.values(student);
console.log(values);

// get value and key
key_values = Object.entries(student);
console.log(key_values);

const studentPlus = {
	male: 0,
};

// merge object
const c = Object.assign(studentPlus, student);
console.log(c);
const d = { ...studentPlus, ...student };
console.log(d);

// Object.freeze : khong cho chinh sua key-value object
const car = {
	brand: "BMW",
};

const newCar = Object.freeze(car);
newCar.brand = "Vinfast";
console.log(newCar);
car.brand = "MEC";
console.log(car);

// Object.seal: dc chỉnh sửa nhưng không cho phép thêm key mới
const pet = {
	name: "dog",
	owner: {
		name: "tranbao",
	},
	testThis: () => console.log(this.name),
};

Object.seal(pet);
pet.age = 2;
console.log(pet);

// Sao chép object cơ ban
const newPet = { ...pet }; // or Object.assign({},pet) chỉ copy được 1 cấp
newPet.name = "cat";
newPet.owner.name = "danghanh";
console.log(pet);
console.log(newPet);

const newPet1 = JSON.parse(JSON.stringify(pet));
newPet1.owner.name = "quanghuy";
console.log(pet);
console.log(newPet1);

// this
const dog = {
	name: "dog",
	owner: {
		name: "tranbao",
	},
	testThis: function () {
		// ? arrow function not use this
		return `dog name is ${this.name}`;
	},
};

console.log(dog.testThis());

// optional chaining dog.owner?.name?
console.log(dog.owner?.name);

// destructuring object
const { name, owner } = dog;
console.log(name);
console.log(owner);

testDestructuringObject = (pet_name, { name, owner }, ...arr) => {
	console.log(pet_name);
	console.log(arr);
	console.log(name, owner);
};

testDestructuringObject1 = (pet_name, obj, ...arr) => {
	console.log(pet_name);
	console.log(arr);
	console.log(obj);
};

testDestructuringObject("elephan", pet, 1, 2, 3, 4);
testDestructuringObject("elephan", pet, 1, 2, 3, 4);
