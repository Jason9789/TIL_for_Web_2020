$(document).ready(function() {
  var cal = new Calculator();
});

// ES 2015 문법
class Calculator {
  constructor() {
    this.$value1 = null;
    this.operator = null;
    this.$value2 = null;
    this.$output = null;
    // 요소 초기화 메서드 호출
    this.init();
    // 이벤트 초기화 메서드 호출
    this.initEvent();
  }

  // 요소 초기화
  init() {
    this.$value1 = $("#val1");
    this.operator = $("#op");
    this.$value2 = $("#val2");
    this.$output = $("#output");
  }

  // 이벤트 초기화
  initEvent() {
    var objThis = this;
    $("#cal").click(function() {
      // 메서드 호출
      objThis.exeCalculate();
    });
  }

  // 입력 정보를 구한 후 계산 메서드 호출
  exeCalculate() {
    // 정보 입력 구하기.
    var val1 = parseInt(this.$value1.val());
    var operator = this.operator.val();
    var val2 = parseInt(this.$value2.val());
    // 사칙연산 메서드 실행
    this.calculator(operator, val1, val2);
  }

  // 계산기 메서드
  calculator(op, num1, num2) {
    var result = "";
    switch (op) {
      case "+":
        result = num1 + num2;
        console.log("더하기");
        break;
      case "-":
        result = num1 - num2;
        console.log("빼기");
        break;
      case "*":
        result = num1 * num2;
        console.log("곱하기");
        break;
      case "/":
        result = num1 / num2;
        console.log("나누기");
        break;
      default:
        result = "지원하지 않는 연산자입니다.";
    }
    // 계산 정보를 output에 출력
    this.$output.html(result);
  }
}
