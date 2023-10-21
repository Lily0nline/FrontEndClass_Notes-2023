const arr = ["yj", "abc", "melody"]
arr.push("happyCat")
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift("kuromi")
console.log(arr)
arr.shift()
console.log(arr)


//if there's no "kuromi" then apply it
// 부정연산자를 통해 쿠로미가 없으면 false -> true로 바꾸어서 조건문 실행
if(!arr.includes("kuromi")){

}
console.log(arr)
console.log(arr.indexOf('melody'));
console.log(arr.indexOf('bob')); // -1

if(arr.indexOf('kuromi') < 0){
    arr.push('kuromi')
}

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
const arr3 = arr1.concat(arr2)

console.log(arr3)

const apart = ["abc", "def", "ghi", "jkl"  ,"mno", "ghf"]
// apart.slice(start, end)
// start -> index, end -> index + 1
const arr4 = apart.slice(3, 5)
// end는 생략이 가능하며 end가 없을 경우 마지막까지 모두 가지고 옵니다
// start부터 마지막 인덱스까지
console.log(arr4)
const arr5 = apart.slice(-3, -1)
// -를 붙이면 마지막 인덱스부터 -1로 계산
console.log(arr5)


//apart.splice(start, count, item)
//splice 원본 배열을 삭제
apart.splice(3,2, 'im hungry', 'im tired')
console.log(apart)

const phone = '010-1234-1234'
phone.split('') // ['0','1','0',...]
const splitPhone = phone.split('-') // ['010', '1234', '1234']
// const hashedPhone = splitPhone[0] + '****' + splitPhone[2]
// 010***1234
splitPhone[1] = "****" // ['010,' '****', '1234']
console.log(splitPhone.join('-')) //010-***-1234)

//split() -> 안에 들어간 요소를 기준으로 자릅니다 -> 배열화
//join() -> ()안에 들어간 요소를 배열의 요소 사이에 넣습니다 -> 문자열화
