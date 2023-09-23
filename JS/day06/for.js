
const arr = [0,1,2,3]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
//0,1,2,3
//-, n
//이터러블하지 않은 상황일 때도 사용이 가능 

arr.forEach((el, index, origin) => {
    console.log(el, index, origin)
})
//순서 보장, 모든 요소를 순회, index를 사용할 수 있음
