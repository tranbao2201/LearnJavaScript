function total(arr) {
  return arr.reduce((accumulator, item) => accumulator + item, 0);
}

function average(arr, fn) {
  return fn(arr) / arr.length;
}

arr = [1, 2, 3, 4, 5, 6, 7, 8];

fn = total;
console.log(average(arr, fn));
