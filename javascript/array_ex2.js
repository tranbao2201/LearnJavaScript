const splitArray = (arr, number) => {
	count = 1;
	result = [];
	tempArray = [];
	for (let i = 0; i < arr.length; i++) {
		if (count <= number) {
			count++;
			tempArray.push(arr[i]);
		} else {
			result.push(tempArray);
			count = 1;
			tempArray = [];
			i--;
		}
	}
	if (count !== 1) result.push(tempArray);
	return result;
};

const splitArray1 = (arr, number) => {
	index = 0;
	result = [];
	while (index < arr.length) {
		result.push(arr.slice(index, index + number));
		index += number;
	}
	return result;
};

const splitArray2 = (arr, number) => {
	index = 0;
	loop = Math.ceil(arr.length / number);
	result = [];
	while (index < loop) {
		result.push(arr.splice(0, number));
		index++;
	}
	return result;
};

console.log(splitArray([1, 2, 3, 4, 5, 5, 6, 7, 6, 7, 100], 4));
console.log(splitArray1([1, 2, 3, 4, 5, 5, 6, 7, 6, 7, 100], 4));
console.log(splitArray2([1, 2, 3, 4, 5, 5, 6, 7, 6, 7, 100], 4));
