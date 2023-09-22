const mapArr = [1,2,3,4,5]
mapArr.map((el) => el + 1) // [2,3,4,5,6]


/*
mapArr.map((el) => {
    reutrn el + 1
})
*/

const filterArr = [1,2,3,4,5,6]
const evenArr = filterArr.filter((el) => el%2 === 0 ) // [2,4,6]

const posts = [
    {
        id: 1,
        title: 'title-1',
        content: 'content-1'
    },
    {
        id: 2,
        title: 'title-2',
        content: 'content-2'
    }
]