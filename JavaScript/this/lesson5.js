var data = 10;

function MyClass() {
  this.data = 0;
}

MyClass.prototype.method1 = function() {
  this.data = 20;
  data = 30;

  console.log("메소드 에서의 this");
  console.log(`1. data1 = ${data}`);
  console.log(`2. this.data = ${this.data}`);
  console.log(`3. window.data = ${window.data}`);
};

// 인스턴스 생성

var my1 = new MyClass();

my1.method1();
