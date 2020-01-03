var data = 10;

$(document).ready(function() {
  // 이벤트 리스너 등록
  $("#myButton").click(function() {
    this.data = 20;
    data = 30;

    console.log("이벤트 리스너에서의 this");
    console.log(`1. data1 = ${data}`);
    console.log(`2. this.data = ${this.data}`);
    console.log(`3. window.data = ${window.data}`);
  });
});
