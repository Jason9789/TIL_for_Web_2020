function add1(x, y) {
  return x + y;
}
console.log(add1(1, 2));

const add2 = (x, y) => {
  return x + y;
};
console.log(add2(1, 2));

const add3 = (x, y) => x + y;
console.log(add3(1, 2));

const add4 = (x, y) => x + y;
console.log(add4(1, 2));

function not1(x) {
  return !x;
}
console.log(not1(1));

const not2 = x => !x;
console.log(not2(0));

var relationship1 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends: function() {
    var that = this; // relationship1을 가리키는 this를 that에 저장
    this.friends.forEach(function(friend) {
      console.log(that.name, friend);
    });
  }
};
relationship1.logFriends();

const relationship2 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends() {
    this.friends.forEach(friends => {
      console.log(this.name, friends);
    });
  }
};
relationship2.logFriends();
