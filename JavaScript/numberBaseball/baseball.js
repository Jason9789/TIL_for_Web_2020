var BSbody = document.body;

var numCnddt = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var numArray = [];

for (var i = 0; i < 4; i++) {
  var choice = numCnddt.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
  numArray.push(choice);
}

console.log(numArray);

var BSresult = document.createElement("h1");
BSbody.append(BSresult);

var BSform = document.createElement("form");
document.body.append(BSform);

var BSinput = document.createElement("input");
BSinput.type = "number";
BSinput.maxLength = 4;
BSform.append(BSinput);

var BSbtn = document.createElement("button");
BSbtn.textContent = "입력!";

BSform.append(BSbtn);

var failCount = 0;
BSform.addEventListener("submit", function callback(event) {
  event.preventDefault();
  var solution = BSinput.value;
  console.log(solution, numArray, solution === numArray.join(""));

  // 답이 맞으면
  if (solution === numArray.join("")) {
    BSresult.textContent = "홈런";
    BSinput.value = "";
    BSinput.focus();
  }
  // 답이 틀리면
  else {
    var resultArray = solution.split("");
    var strike = 0;
    var ball = 0;
    failCount++;
    if (failCount > 10) {
      BSresult.textContetn =
        "10번 넘게 틀려서 실패! 답은 " + numArray.join(",") + "였습니다.";
      BSinput.value = "";
      BSinput.focus();
    }
    console.log("답이 틀리면");
    for (var i = 0; i < 3; i++) {
      // 같은 자리인지 확인
      if (Number(resultArray[i]) === numArray[i]) {
        strike++;
      }
      // 같은 자리는 아니지만, 숫자가 겹치는지 확인
      else if (numArray.indexOf(Number(resultArray[i])) > -1) {
        ball++;
      }
    }
    BSresult.textContent = strike + "스트라이크 " + ball + "볼 입니다.";
    BSinput.value = "";
    BSinput.focus();
  }
});
