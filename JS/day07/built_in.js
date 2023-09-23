
const str = 'hello';
str.charAt(4) // o
str.concat('My Melody') //hello My Melody
str.indexOf('e') // 1

const date = new Date();
console.log(date)
console.log(date.getFullYear()) // 2023
console.log(date.getMonth()) // 0 ~ 11 
console.log(date.getDate()) // 23 
console.log(date.getDay()) // 6 (0: sunday, 6: saturday)

// 주의 2023-09-23T17:36:25.050Z html로 입력이 불가능
// string, number

date.toString()//문자열
date.toDateString // 시분초를 생략

console.log(date.toString()) //현재 위치 시간
console.log(date.toISOString()) // utc-0