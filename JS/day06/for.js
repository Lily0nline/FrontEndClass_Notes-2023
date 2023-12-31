
const arr = [0,1,2,3]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}
//0,1,2,3
//-, n
//이터러블하지 않은 상황일 때도 사용이 가능 

arr.forEach((el, index, origin) => {
    console.log(el, index, origin)
    //backend data fetching
})
//순서 보장, 모든 요소를 순회, index를 사용할 수 있음


for (let el of arr){
    console.log(el) // 0,1,2,3
}
//순서 보장x, 모든 요소를 순회, 요소의 값만 가지고 올 수 있음
// 배열의 모든 요소의 값만 필요할 때

const yj = {
    age: 24,
    height: 167
}

for (let key in yj){
    console.log(key)
    console.log(yj[key])
}
//age 24, height 167
// 객체를 반복, 순서가 보장되지는 않습니다.

Object.keys(yj) //[age, height]
Object.values(yj) //[24,167]
Object.entries(yj) //[[age,24][height,167]]

for(let [key, value]of Object.entries(yj)){
    console.log(key, value)
}