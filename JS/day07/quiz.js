
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




// quiz 1 answer (from what I learned in class before)

/*const phoneNumber = '010-1234-1234'
const splitNumber = phoneNumber.split('-')
splitNumber[1] = "****"
console.log(splitNumber.join('-'))*/

//quiz 1 answer (different method learned today)
//method 1
/*
function hashNumb(num){
    const numberArray = Array.from(num)
    numberArray.splice(4,4, "****")
    console.log(numberArray.join(""))
}
hashNumb("010-1234-1234")*/

//method 2
/*
function hashNumb(num){
    const splitNumber = num.split('-');
splitNumber[1] = "*".repeat(4);
console.log(splitNumber.join('-'))
}
hashNumb("010-1234-1234")*/

//quiz 2 solution
/*
output --> 1등, 2등, 3등
       --> 맞춘 갯수 -> 분기(swtich, if)]
       --> 2등은 bouns 숫자와 연관이 있다 -> 분기 (if)
       --> 정답, 입력 값 비교
       --> 정답 랜덤 숫자 7자리
       --> 입력 랜덤 or 사용자가 직접 입력
input
       --> 겹치지 않는 랜덤 숫자 7자리 or 사용자가 직접 입력
       --> [1, 2, 3, 42, 41, 21, 32] --> 사용자가 직접 입력 (o)
*/

function generatedLottoNumber(){
    // 1 ~ 45 random number
    const random = Math.floor(Math.random () * 45 + 1)
    // 중복을 허용 하면 안된다
    // 중복 검사 -> 현재까지 작성한 숫자의 배열을 순회

    const lottoArray = []

    /*for(let i = 0; i<7; i++){
        const random = Math.floor(Math.random() * 45 + 1)
        if(!lottoArray.includes(random)){
            lottoArray.push(random)
        }
    }*/
    //요소의 길이가 명확하지 않기 때문에 while 반복문을 사용
    //초기식과 증감식이 관련이 없다 반복에, 특정 조건만큼 반복

    //new set()
    //자바스크립트 배열에서 중복 요소 삭제, 중복 요소 허용 x

    while(lottoArray.length < 7){
        const random = Math.floor(Math.random()* 45 + 1)
        if (!lottoArray.includes(random)){
            lottoArray.push(random)
        }
    }
    return lottoArray
}

const lotto = generatedLottoNumber()
console.log(lotto)


//using the arrow function to not forget about it lol
const lottery = (numberArr) => {
    //요구 사항 분석
    //정답
    //numberArr와 정답의 비교
    //맞춘 갯수
    //맞춘 갯수에 따라서 다른 결과
    //const winningNumberArray = [23,1,2,4,5,3,12]
    const winningNumberArray = generatedLottoNumber()
    const bonusNum = winningNumberArray.pop()

    let winningCount;
    // 사용자가 인자로 전달한 로또번호 중 각 번호가 정답 번호에 포함되어 있으면 ++
  for(let num of numberArr){
    if(winningNumberArray.includes(num)){
      winningCount ++;
    }
  }

  let bonusFlag = false;
  if(numberArr.includes(bonusNum)){
    bonusFlag = true;
  }
  let rank;
  switch(winningCount){
    //...
    case 6:
        //if(bonusFlag) return rank = 2;
       //return rank = 1;
        if(bonusFlag){
            rank = 2;
        } else {
            rank = 1;
        }
        break; 
    case 5:
        rank = 3;
        break;
    case 4:
        rank = 4;
        break;
    case 3:
        rank = 5;
        break;
    default:
         rank = "Try again next time"
  }
  console.log(rank)
}

lottery(lotto)