// var candyMachine = {
//   status: {
//     name: "node",
//     count: 5
//   },
//   getCandy: function() {
//     this.status.count--;
//     return this.status.count;
//   }
// };

// var getCandy = candyMachine.getCandy;
// var count = candyMachine.status.count;

// console.log(count);

// 다음과 같이 바꿀 수 있음
const candyMachine = {
  status: {
    name: "node",
    count: 5
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  }
};
const {
  getCandy,
  status: { count }
} = candyMachine;

// 배열 비구조화
// var array = ["nodejs", {}, 10, true];
// var node = array[0];
// var obj = array[1];
// var num = array[2];
// var bool = array[3];

// console.log(node);
// console.log(obj);
// console.log(num);
// console.log(bool);

// 다음과 같이 바꿀 수 있다.
const array = ["nodejs", {}, 10, true];
const [node, obj, num, bool] = array;

console.log(node);
console.log(obj);
console.log(num);
console.log(bool);
