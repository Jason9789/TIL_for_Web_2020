var body = document.body;
var table = document.createElement("table");
var lines = []; // 여러 줄
var blocks = []; // 여러 칸
var turn = "X";

var callback = function(event) {
  //   console.log(event.target); // 칸
  //   console.log(event.target.parentNode); // 줄
  //   console.log(event.target.parentNode.parentNode); // 테이블

  var orderLine = lines.indexOf(event.target.parentNode); // 몇 번째 줄?
  //   console.log("몇줄", orderLine);
  var orderBlock = blocks[orderLine].indexOf(event.target);
  console.log("몇줄", orderLine, "몇칸", orderBlock);

  // 칸이 이미 채워져 있는가
  if (blocks[orderLine][orderBlock].textContent !== undefined) {
    console.log("빈칸 아님");
  } else {
    console.log("빈칸임");
    blocks[orderLine][orderBlock].textContent = turn; // 선택한 칸에 X로 색칠

    // 턴에 따라 X, O 바꾸기
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }
};

for (i = 1; i <= 3; i += 1) {
  var line = document.createElement("tr");
  lines.push(line);
  blocks.push([]);
  for (j = 1; j <= 3; j += 1) {
    var block = document.createElement("td"); // 한 칸
    block.addEventListener("click", callback);
    blocks[i - 1].push(block);
    line.appendChild(block);
  }
  table.appendChild(line);
}
body.appendChild(table);

console.log(lines, blocks);
