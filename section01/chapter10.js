for (let idx = 0; idx <= 10; idx++) {
  if (idx % 2 === 0) {
    // continue를 실행하게 되면 아래 코드는 실행되지 않고 다음 반복회차로 넘어감
    continue;
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
