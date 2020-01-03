var data = 10;

function outer() {
  // 중첩 함수
  function inner() {
    this.data = 20;
    data = 30;

    console.log("일반 중첩 함수에서의 this");
    console.log(`1. data1 = ${data}`);
    console.log(`2. this.data = ${this.data}`);
    console.log(`3. window.data = ${window.data}`);
  }
  inner();
}

outer();
