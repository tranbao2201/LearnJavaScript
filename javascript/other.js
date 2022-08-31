// NaN: Not a number
console.log(null + undefined);

//  type coercion:
//    Nếu có chuỗi và + thì sẽ ép về string, - sẽ ép về number
// không có chuỗi sẽ ép kiêu về number để thực hiện , nếu 1 phần tử ép kiểu trả về
// NaN thì kết quả sẽ là NaN
// Các kiểu sẽ bị ép về Nan từ number: NaN, undefined, String không có kí tự " "

//  == loose equality === strict equality

const age = prompt("Input your age:");
if (Number(age) >= 18) {
  alert("Entering theater");
} else {
  alert("Not entering");
}
