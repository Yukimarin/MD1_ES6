// Bài 4: Viết chương trình sử dụng destructuring
// để tách giá trị của đối tượng sau
// let person = {
//   name: "Rikkei Academy",
//   age: 2,
//   address: {
//     street: "Mễ Trì",
//     city: "Hà Nội",
//   },
// };

// let { name, age, address } = person;
// console.log(name, age, address);

// let { street, city } = address;
// console.log(street, city);

// Bài 2 (BTTH)
// Viết hàm nhận vào một mảng 2 chiều, sử dụng phương thức reduce
// và trả về một mảng một chiều chứa toàn bộ những phần tử con trong các mảng con
// Input:
// flatternArr([['a', 'b'], ['c', 'b', 'a']])
// Output:
// ['a', 'b', 'c', 'b', 'a']

// Phương thức concat(): nối 2 mảng
// const arr1 = ["a", "b"];
// const arr2 = ["c", "b", "a"];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// Giới thiệu reduce
// let arr = [1, 2, 3, 4];
// Cách 1:
// let sum = 10;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// console.log(sum);

// Cách 2: sử dụng reduce
// Khi có initalValue thì preValue = initialValue
// initalValue có thể là số, hoặc là mảng hoặc là object
// let sum = arr.reduce(
//   (previousValue, currentValue) =>
//     (previousValue = previousValue + currentValue),
//   100
// );
// console.log(sum);

// function ghepMang(arr) {
//   return arr.reduce((pre, cur) => pre.concat(cur), []);
// }
// Lần lặp 1: pre = initalValue = [] ; cur=  ["a", "b"] => pre =["a", "b"]
// Lần lặp 2: pre =["a", "b"] ; cur =  ["c", "b", "a"] => pre ['a', 'b', 'c', 'b', 'a']

// let input = [
//   ["a", "b"],
//   ["c", "b", "a"],
// ];

// console.log(ghepMang(input));
// Cách 2: Không sử dụng reduce (BTVN)

// Bài 3: Viết một hàm nhận vào 2 mảng số, so sánh 2 mảng và trả về
// 1 mảng mới chứa các phần tử độc nhất giữa 2 mảng. Sử dụng arrow function
let arr1 = [1, 2, 3, 4, 4];
let arr2 = [1, 4, 3, 7];
// => Output : [2,7]
// => Output : [1,2,3,4,7] (BTVN) => chữa bài
// Sử dụng phương thức includes

let newArr = (arr1, arr2) => {
  // Tạo mảng kết quả để lưu giá trị
  let result = [];
  arr1.forEach((element) => {
    // arr2.include(element) => true nếu tìm thấy, false nếu không tìm thấy
    if (!arr2.includes(element) && !result.includes(element)) {
      result.push(element);
    }
  });
  arr2.forEach((element) => {
    if (!arr1.includes(element) && !result.includes(element)) {
      result.push(element);
    }
  });
  return result;
};

console.log(newArr(arr1, arr2));
