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

  if (emptyArray.length === 0) {
    alert("게임오버 : " + scoreTable.textContent);
    table.innerHTML = "";
    reset();
  } else {
    console.log(emptyArray);
    var randomLocation =
      emptyArray[Math.floor(Math.random() * emptyArray.length)];
    data[randomLocation[0]][randomLocation[1]] = 2;
    draw();
  }
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

  switch (direction) {
    // 왼쪽 ===========================================
    case "left":
      var newData = [[], [], [], []];

      // new Data 배열에 저장
      data.forEach(function(rowData, i) {
        rowData.forEach(function(columnData, j) {
          if (columnData) {
            // 합쳐져야 하는 경우
            if (
              newData[i][newData[i].length - 1] &&
              newData[i][newData[i].length - 1] === columnData
            ) {
              newData[i][newData[i].length - 1] *= 2;
              var nowScore = parseInt(scoreTable.textContent, 10);
              scoreTable.textContent =
                nowScore + newData[i][newData[i].length - 1];
            } else {
              newData[i].push(columnData);
            }
          }
        });
      });
      // 저장했던 newData를 통해서 모든 숫자들을 맨 왼쪽으로 옮기기
      [1, 2, 3, 4].forEach(function(rowData, i) {
        [1, 2, 3, 4].forEach(function(columnData, j) {
          data[i][j] = newData[i][j] || 0;
        });
      });
      break;

    // 오른쪽 ===========================================
    case "right":
      var newData = [[], [], [], []];

      // new Data 배열에 저장
      data.forEach(function(rowData, i) {
        rowData.forEach(function(columnData, j) {
          if (columnData) {
            // 합쳐져야 하는 경우
            if (newData[i][0] && newData[i][0] === columnData) {
              newData[i][0] *= 2;
              var nowScore = parseInt(scoreTable.textContent, 10);
              scoreTable.textContent = nowScore + newData[i][0];
            } else {
              newData[i].unshift(columnData);
            }
          }
        });
      });
      // 저장했던 newData를 통해서 모든 숫자들을 맨 오른쪽으로 옮기기
      [1, 2, 3, 4].forEach(function(rowData, i) {
        [1, 2, 3, 4].forEach(function(columnData, j) {
          data[i][3 - j] = newData[i][j] || 0;
        });
      });
      break;

    // 위 ===========================================
    case "up":
      var newData = [[], [], [], []];

      // new Data 배열에 저장
      data.forEach(function(rowData, i) {
        rowData.forEach(function(columnData, j) {
          if (columnData) {
            // 합쳐져야 하는 경우
            if (
              newData[j][newData[j].length - 1] &&
              newData[j][newData[j].length - 1] === columnData
            ) {
              newData[j][newData[j].length - 1] *= 2;
              var nowScore = parseInt(scoreTable.textContent, 10);
              scoreTable.textContent =
                nowScore + newData[j][newData[j].length - 1];
            } else {
              newData[j].push(columnData);
            }
          }
        });
      });
      // 저장했던 newData를 통해서 모든 숫자들을 맨 위로 올려버리기.
      [1, 2, 3, 4].forEach(function(columnData, i) {
        [1, 2, 3, 4].forEach(function(rowData, j) {
          data[j][i] = newData[i][j] || 0;
        });
      });
      break;

    // 아래 ===========================================
    case "down":
      var newData = [[], [], [], []];

      // new Data 배열에 저장
      data.forEach(function(rowData, i) {
        rowData.forEach(function(columnData, j) {
          if (columnData) {
            // 합쳐져야 하는 경우
            if (newData[j][0] && newData[j][0] === columnData) {
              newData[j][0] *= 2;
              var nowScore = parseInt(scoreTable.textContent, 10);
              scoreTable.textContent = nowScore + newData[j][0];
            } else {
              newData[j].unshift(columnData);
            }
          }
        });
      });
      // 저장했던 newData를 통해서 모든 숫자들을 맨 아래 올려버리기.
      [1, 2, 3, 4].forEach(function(columnData, i) {
        [1, 2, 3, 4].forEach(function(rowData, j) {
          data[3 - j][i] = newData[i][j] || 0;
        });
      });
      break;
  }
  random();
});
