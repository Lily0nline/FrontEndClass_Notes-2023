/* 
  자판기라는 함수를 정의
  자판기는 처음에 실행되었을 때 자판기가 가동되었습니다 출력

  잔돈이 0원이면 음료수 명을 출력
  잔돈이 있으면 음료수 명과 잔돈을 함께 출력

  단, 없는 메뉴를 선택하면 존재하지 않는 상품입니다.
  만약 투입금액이 선택한 음료수 값보다 적을 경우 금액이 부족합니다. 출력
  최소 금액보다 적은 금액을 투입했을 때는 금액을 잘못 투입하셨습니다. 금액 반환 출력

  함수의 인자는 투입 금액(coin) 상품명인 (product)

  메뉴
  솔의눈 300 (원)
  비타500 500 (원)
  콜라 1000 (원)

  hint
  객체와 함수
*/

/*
출력값
-- 공통 --
console.log("자판기가 가동되었습니다") -- 무조건 실행

-- 성공 --
console.log(product) -- 만약에 coin === price
console.log(product, coin-price) --- 만약에 price < coin

-- 실패 --
console.log(존재하지 않는 상품입니다) -- 만약에 product in menu, !price
// 객체의 값이 있는지 없는지 검사하기 위해서 특정 키의 값이 있는지 확인하거나 in으로 찾을 수 있다

console.log(금액이 부족합니다) -- 만약에 price > coin
console.log(금액을 잘못 투입하셨습니다) -- 만약에 conin < 300

입력값
coin, 상품명
price -> 특정 집단에서 특정 키를 갖고있는 값을 구한다
          ----- 객체

const menu = {
  솔의눈: 300,
  비타500: 500,
  콜라: 1000
}

menu[product] ===> price
*/

const menu = {
    솔의눈: 300,
    비타500: 500,
    콜라: 1000
  }
  
  function 자판기(coin, product){
    console.log("자판기가 가동되었습니다.")
  
    const price = menu[product]
    const charge = coin - price
  
    if(!price) return console.log("존재하지 않는 상품입니다")
    if(price > coin) return console.log("금액이 부족합니다")
    if(coin < 300) return console.log("금액을 잘못 투입하셨습니다", coin)
    
    if(charge === 0) return console.log(product)
    console.log(product, charge)
  }
