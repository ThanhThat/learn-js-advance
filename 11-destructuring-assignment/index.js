// ...
let arr = [1, 2, 3, 4, 5];
console.log(">> check data arr: ", arr);

let arr1 = [...arr, 6];
console.log(">> Check data arr1: ", arr1);

let state = {
  name: "that",
  address: "bac lieu",
};
console.log(state);

let state1 = { ...state, channel: "thanhthat" };
console.log(state1);

// destructuring

// let name = state1.name;
// let address = state1.address;
// let channel = state1.channel;

// => Sủ dụng cách bên dưới hay hơn ngắn gọn hơn:
// ba biến khai báo phải trùng tên với key trong obj
let { name, address, channel } = state1;

console.log(">> name state1: ", name);
console.log(">> address state1: ", address);

let arr2 = ["thanh that", "hoi thanh that"];

let [nameArr, channelArr] = arr2;

console.log(">> name arr2: ", nameArr);
console.log(">> channel arr2: ", channelArr);
