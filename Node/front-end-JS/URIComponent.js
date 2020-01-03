var xhr = new XMLHttpRequest();

//요청에 대한 콜백
xhr.onreadystatechange = function() {
  // 요청이 완료되면
  if (xhr.readyState === xhr.DONE) {
    if (xhr.readyState === 200 || xhr.readyState === 201) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.responseText);
    }
  }
};

// 한글 주소 인코딩 후 전송
xhr.open(
  "GET",
  "https://www.zerocho.com/api/search/" + encodeURIComponent("노드")
);

// 요청 전송
xhr.send();
