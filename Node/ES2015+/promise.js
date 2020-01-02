const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

promise
  .then(message => {
    console.log(message); // 성공(resolve)한 경우
  })
  .catch(error => {
    console.log(error); // 실패(reject)한 경우
  });

const promise1 = Promise.resolve("성공1");
const promise2 = Promise.resolve("성공2");
Promise.all([promise1, promise2])
  .then(result => {
    console.log(result); // ['성공1', '성공2']
  })
  .catch(error => {
    console.error(error);
  });
