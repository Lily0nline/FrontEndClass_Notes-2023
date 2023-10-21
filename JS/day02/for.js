for (let i = 0; i < 10; i++){
    console.log(`the current number is ${i + 1}.`)
}
// repeats 10 times, 1~10까지 출력
// i < 10 false
// i = 10 -> false, i = 9; 0~9 -> 10번 실행

//중첩 반복문
// 진진 고등학교 (1~3학년, 9반)
for (let i = 1; i < 10; i++) {
    console.log(`1학년 ${i}반`);
  }
  for (let i = 1; i < 10; i++) {
    console.log(`2학년 ${i}반`);
  }
  for (let i = 1; i < 10; i++) {
    console.log(`3학년 ${i}반`);
  }
  
  // 중첩
  for (let i = 1; i < 4; i++) {
    // 1, 2, 3
    for (let j = 1; j < 10; j++) {
      // 1 ~ 9
      console.log(`${i}학년${j}반`);
    }
  }
  // 27
  
  let count = 0;
  while (count < 3) {
    console.log(count); // 0, 1, 2
    count++; // 1, 2, 3
  }
  
  // quiz
  // 구구단 만들기
  // 중첩 반복문을 사용해서 1~9단까지 구구단 만들기
  // 1 x 1 = 1;
  // ... 9 x 9 = 81;
  
  // 출력 console.log(`${i} x ${j} = ${i*j}`}
  // i -> 1~9
  // j -> 1~9
  // i -> 1 j-> 1~9
  
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
  