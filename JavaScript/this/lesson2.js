var data = 10;

function outer() {
  this.data = 20;
  data = 30;

  console.log(`1. data1 = ${data}`);
  console.log(`2. this.data = ${this.data}`);
  console.log(`3. window.data = ${window.data}`);
}

outer();
