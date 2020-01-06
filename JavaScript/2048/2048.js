var table = document.getElementById("table");
var data = [];

function reset() {
  var fragment = document.createDocumentFragment();
  [1, 2, 3, 4].forEach(function() {
    var rowData = [];
    data.push(rowData);

    var tr = document.createElement("tr");
    [1, 2, 3, 4].forEach(function() {
      rowData.push(0);
      var td = document.createElement("td");
      tr.appendChild(td);
    });
    fragment.appendChild(tr);
  });
  table.appendChild(fragment);
}

function random() {
  var emptyArray = [];
  data.forEach(function(rowData, i) {
    rowData.forEach(function(columnData, j) {
      if (!columnData) {
        emptyArray.push([i, j]);
      }
    });
  });
  console.log(emptyArray);
  var randomLocation =
    emptyArray[Math.floor(Math.random() * emptyArray.length)];
  data[randomLocation[0]][randomLocation[1]] = 2;
  draw();
}

function draw() {
  data.forEach(function(rowData, i) {
    rowData.forEach(function(columnData, j) {
      if (columnData > 0) {
        table.children[i].children[j].textContent = columnData;
      } else {
        table.children[i].children[j].textContent = "";
      }
    });
  });
}

reset(); // 초기화
random(); // 랜덤 생성
draw(); // 그리기

var dragStart = false;
var draging = false;
var startPoint; // 드래그 시작 좌표
var endPoint; // 드래그 끝 좌표

// 마우스 누를 때
window.addEventListener("mousedown", function(event) {
  //   this.console.log("mousedown", event);
  dragStart = true;
  startPoint = [event.clientX, event.clientY];
});

// 마우스 움직일 때
window.addEventListener("mousemove", function(event) {
  if (dragStart) {
    draging = true;
    // this.console.log("mousemove", event);
  }
});

// 마우스 뗄 때
window.addEventListener("mouseup", function(event) {
  //   this.console.log("mouseup", event);
  endPoint = [event.clientX, event.clientY];

  if (draging) {
    var direction;
    var subX = endPoint[0] - startPoint[0];
    var subY = endPoint[1] - startPoint[1];

    if (subX < 0 && Math.abs(subX) / Math.abs(subY) > 1) {
      direction = "left";
    } else if (subX > 0 && Math.abs(subX) / Math.abs(subY) > 1) {
      direction = "right";
    } else if (subY > 0 && Math.abs(subX) / Math.abs(subY) < 1) {
      direction = "down";
    } else if (subY < 0 && Math.abs(subX) / Math.abs(subY) < 1) {
      direction = "up";
    }
    this.console.log(direction);
  }

  dragStart = false;
  draging = false;
});
