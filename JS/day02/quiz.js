/* 
이름: 여러분들의 성함 ----> 변수 / 상수
국어: 80점
수학: 70점
영어: ..점
탐구: ..점
평균
학점

이 네가지의 점수의 평균을 구하여
90점 이상이면 a학점
80점 이상이면 b학점
70점 이상이면 c학점
그 외 F학점

if문 사용
console.log()
OOO님의 이번학기 성적인 O학점 입니다.
*/

//console.log에 문자열과 함께 변수를 사용하는 방법

/* let name = "yjk";
let grade = "A";
console.log("Ms. yjk's grade this semester are all A's.");
3 ways to write it
//1 "+"
console.log("Ms." + name + "'s grade this semester are all" + grade + "'s.");
//2 "`"
console.log(`Ms. ${name} + 's grade this semester are all + ${grade} + 's.`);
//3 ","
console.log("Ms." , name , "'s grade this semester are all" , grade , "'s."); */

// solution
// 입력 -> 연산 -> 출력
// 출력 -> console.log(`Ms. ${name} + 's grade this semester are all + ${grade} + 's.`);
// 입력 -> name, grade(-> math, kor, tam, eng -> avg)
// #1. 문제 함산의 평균 값을 구한다.
// #2. 함산 평산된 평균 결과에 따라 학점의 분기를 생성한다
//90,A 80,B 70,C

let name = "yjk"
let grade; 

let kor, math, tam, eng;

kor = 60;
math = 85;
tam = 90;
eng = 100;

let avg = (kor + math + tam + eng) /4;
if(avg >= 90) {
    grade = "A";
} else if (avg >= 80) {
    grade = "B";
} else if (avg >= 70){
    grade = "C";
} else{
    grade = "D";
}

console.log(`Ms. ${name} + 's grade this semester are all + ${grade} + 's.`);
