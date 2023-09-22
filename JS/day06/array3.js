// 배열이 인지 아닌지 검사
console.log(Array.isArray([1,2,3]))

//length만으로 배열인지 아닌지 확인 이 불가
//배영리 아닌 경우는 length가 없기 때문입니다
if(Array.isArray("a")){
} else {
}

const obj = {
    0: 'a',
    1: 'b',
    length: 2
}

const arr = Array.from(obj)
console.log(arr) //[a,b]

const arr2 = Array.from({length: 5})
console.log(arr2)

const arr3 = Array.from({length: 5}, (el, index) => {
    return 0
})
console.log(arr3)
//여러분이 설개한 구조에서 필요한 길이만큼 생성해야하는 배열이 있을 때 사용
