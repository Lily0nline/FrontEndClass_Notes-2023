import MockPosts from '../mock/posts.json' assert {type: 'json'}
console.log(MockPosts)

// Read (조회)
// MockPosts = 배열, 배열을 화면에 내가 원하는 UI로 그려줘야한다
// MockPosts(어떤 데이터), board-list(어디에), article(어떤 형태로)

const $boardList = document.querySelector('.board-list')
// eventListener가 없는 경우 

$boardList.innerText = "Hello"
// 1. innerText
// 2. innerHTML
// 3. append, appendChild
// 4. insertAdjacentElement