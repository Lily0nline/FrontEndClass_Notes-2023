
Math.random() // 0 ~ 0.99999999
Math.random() * 10 // 0 ~ 9.9999
Math.random() * 10 + 1 // 1 ~ 10.99999
Math.floor(Math.random() * 45 + 1) // 1 ~ 45 -> 특정 범위에 랜덤 정수






/* 
퀴즈 1번 
전화번호가리기
010-1234-1234 => 010-****-1234

퀴즈 2번
로또 번호 마추기
랜덤 번호 생성 [1~45, 1~45, 1~45, 1~45, 1~45, 1~45, 1~45]
input [?,?,?,?,?,?,?]
중복 번호는 있어서 안됨 -> for, --> push[], includes, new Set()

마지막 번호 = 보너스 번호
로또 번호 3개 -> 5등
로또 번호 4개 -> 4등
로또 번호 5개 -> 3등
로또 번호 5개 + 보너스  -> 2등
로또 번호 6개 -> 1등 --> count - 순회 -> ** --> pop, (filter, at(-1))
                  --> reduce

                  --> switch --> if




퀴즈 3번(심화)
로또 여러장 구매해서 맞추기
*/

// quiz 1 answer

const phoneNumber = '010-1234-1234'
const splitNumber = phoneNumber.split('-')
splitNumber[1] = "****"
console.log(splitNumber.join('-'))