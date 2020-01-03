// // AJAX 요청
// var xhr = new XMLHttpRequest();

// // 요청에 의한 콜백
// xhr.onreadystatechange = function() {
//   // 요청이 완료되면
//   if (xhr.readyState === xhr.DONE) {
//     // 응답 코드가 200이나 201이면
//     if (xhr.status === 200 || xhr.status === 201) {
//       // 서버에서 보내주는 값
//       console.log(xhr.responseText);
//     } else {
//       console.error(xhr.responseText);
//     }
//   }
// };
// // 메소드와 주소 설정
// xhr.open("GET", "https://www.zerocho.com/api/get");
// xhr.send();

// onreadystatechange 대신 onload와 onerror로 성공과 실패를 구별해도 된다.
var xhr = new XMLHttpRequest();
xhr.onload = function() {
  if (xhr.status === 200 || xhr.status === 201) {
    console.log(xhr.responseText);
  }
};
xhr.onerror = function() {
  console.error(xhr.responseText);
};
xhr.open("GET", "https://www.zerocho.com/api/get");
xhr.send();

// 다음은 서버로 데이터를 같이 보내는 POST 요청의 경우. JSON 데이터를 보냄.
// 전체적인 구조는 비슷한데 xhr.send 메서드에 데이터를 넣어 보내는 것이 다름.
// var xhr = new XMLHttpRequest();
// var data = {
//   name: "zerocho",
//   birth: 1994
// };

// xhr.onreadystatechange = function() {
//   if (xhr.readyState === xhr.DONE) {
//     if (xhr.status === 200 || xhr.status === 201) {
//       console.log(xhr.responseText);
//     } else {
//       console.log(xhr.responseText);
//     }
//   }
// };

// xhr.open("POST", "https://www.zerocho.com/api/post/json");

// // 콘텐츠 타입을 json으로
// xhr.setRequestHeader("Content-Type", "application/json");

// // 데이터를 동봉해 전송
// xhr.send(JSON.stringify(data));
