// var formData = new FormData();

// formData.append("name", "zerocho");
// formData.append("item", "orange");
// formData.append("item", "melon");

// formData.has("item"); // true
// formData.has("money"); // false
// formData.get("item"); // orange
// formData.getAll("item"); // ['orange', 'melon']

// formData.append("test", ["hi", "zero"]);
// formData.get("test"); // hi, zero
// formData.delete("test");
// formData.get("test"); // null
// formData.set("item", "apple");
// formData.getAll("item"); // ['apple']

var xhr = new XMLHttpRequest();
var formData = new FormData();
// formData.append("name", "zerocho");
// formData.append("birth", 1994);

xhr.onreadystatechange = function() {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200 || xhr.status === 201) {
      console.log(xhr.responseText);
    } else {
      console.log(xhr.responseText);
    }
  }
};

xhr.open("POST", "https://www.zerocho.com/api/post/formdata");
// 폼 데이터 객체 전송
xhr.send(formData);
