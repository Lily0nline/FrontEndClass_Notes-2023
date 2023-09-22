// 자바스크립트의 빌트인 객체 // 내장 객체
// Object, 빌트인 객체
const yj = {
    age: 23,
    height: 167,
    hobby: 'idk'
  }
  
  // seongyong property (key, value)
  // 객체의 key, values를 따로 확인할 때 사용
  console.log(Object.values(yj))
  console.log(Object.keys(yj))
  console.log(Object.entries(yj))
  
  console.log(Object.entries(yj)[0][0])
  // 다차원 배열형태로 반환
  // 배열 안에 요소로 배열이 존재