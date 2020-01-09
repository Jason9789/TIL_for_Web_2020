var body = document.body;
var table = document.createElement("table");

for (i = 1; i <= 3; i += 1) {
  var line = document.createElement("tr");
  for (j = 1; j <= 3; j += 1) {
    var block = document.createElement("td");
    line.appendChild(block);
  }
  table.appendChild(line);
}

body.appendChild(table);
