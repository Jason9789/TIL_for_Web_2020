// // 첫 번째 Class A
// function MyClassA() {
//   this.property1 = 10;
// }

// MyClassA.prototype.method1 = function() {
//   console.log("this.property1 = " + this.property1);
// };

// MyClassA.prototype.method2 = function() {
//   console.log("이 기능은 MyClassA에 있는 기능입니다.");
// };

// // 두 번째 - MyClassB
// function MyClassB() {
//   this.property1 = 20;
// }

// MyClassB.prototype.method1 = function() {
//   console.log("this.property1 = " + this.property1);
// };

// MyClassB.prototype.method2 = function() {
//   console.log("이 기능은 MyClassB에 있는 기능입니다.");
// };

// // 인스턴스 생성
// var classA = new MyClassA();

// console.log("classA.property1 = " + classA.property1);
// classA.method1();
// classA.method2();

// var classB = new MyClassB();

// console.log("classB.property1 = " + classB.property1);
// classB.method1();
// classB.method2();

// 중복 함수 제거
class MyParent {
  constructor() {
    this.property1 = 10;
  }

  method1() {
    console.log("this.property1 = " + this.property1);
  }
}

class MyClassA extends MyParent {
  method2() {
    console.log("MyClassA 입니다.");
  }
}

class MyClassB extends MyParent {
  method2() {
    console.log("MyClassB 입니다.");
  }
}

// 클래스 A
const classA = new MyClassA();

console.log("classA.property1 = " + classA.property1);
classA.method1();
classA.method2();

// 클래스 B
const classB = new MyClassB();

console.log("classB.property1 = " + classB.property1);
classB.method1();
classB.method2();
