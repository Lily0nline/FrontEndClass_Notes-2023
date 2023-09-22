const arr = ['yjk', 'bob', 'barb']
const arr2 = arr.map((el, i) => {
    return `hello ${el} is customer number ${i+1}.`
})

console.log(arr2)

//예상
//['hello yjk is 1 customer', ...] 

//배열의 모든 요소를 반복하고, 콜백함수가 리턴하는 값으로, 새로운 배열 생성
//단순히 반복만을 필요로 한다 - > for
//반복 + 반복한 결과 값의 배열이 필요하다 -> map