function addNumberPrint(num1, num2){
    let result = num1 + num2;
    console.log(result);
    //인자로 전달 받을 두 수를 더하고 콘솔로 출력하는 함수
}

addNumberPrint(3,6) // 9
const a = addNumberPrint(3,6)
console.log(a) //undefined

 function addNum(num1, num2){
    return num1 + num2
 }

 addNum(2,3) // no result because there's no console.log

const b = addNum(2,3)
console.log(b)// 5
