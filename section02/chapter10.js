console.log(1);
setTimeout(() => {  // 브라우저가 관리하는 web APIS로 넘김 그리고 타이머 끝난 후 실행
  console.log(2);
}, 3000);
console.log(3);
