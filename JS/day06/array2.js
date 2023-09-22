const menus = [
    {
        title: "Item list",
        isToggled: false
    },
    {
        title: "Customer list",
        isToggled: true,
    },
    {
        title: "Payment",
        isToggled: false,
    }
]

const everyToggledMenus = menus.every((menu) => menu.isToggled)
console.log(everyToggledMenus) // false

const someToggledMenus = menus.some((menu) => menu.isToggled)
console.log(someToggledMenus) // true

const sortArr = [5,3,1,2,4]
sortArr.sort()
console.log(sortArr)

const sortArr2 = [1 , 10, 2, 3, 5]
sortArr2.sort()
console.log(sortArr2)
// 유니코드로 계산 - 전 세계의 모든 문자와 숫자에 대해 코드로 기준하는 일종의 국제 표준
// => 다른 코드로 계산되는구나 그래서 결과 값이 다르구나 -> 그럼 어떻게 ?

sortArr2.sort((a,b) => a - b)
console.log(sortArr2)