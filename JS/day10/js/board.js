import MockPosts from '../mock/posts.json' assert {type: 'json'}
console.log(MockPosts)

// Read (조회)
// MockPosts = 배열, 배열을 화면에 내가 원하는 UI로 그려줘야한다
// MockPosts(어떤 데이터), board-list(어디에), article(어떤 형태로)

const $boardList = document.querySelector('.board-list')
// eventListener가 없는 경우 

$boardList.innerText = "Hello"
//text를 포함하는 경우
$boardList.innerHTML = '<div>Hello</div>'
//html을 포함하는 경우

// 1. innerText
// 2. innerHTML
// 3. append, appendChild
// 4. insertAdjacentElement

// MockPosts -> [article, article, article] -> join 'article article article'
const posts = MockPosts.map((post) => 
`<div class="board-list"> <article class="board-card">
<h3 class="flex-center">
${post.title}
<button>삭제</button>
</h3> 
<div class="flex-center">
${post.content}
</div>
</article>`).join('')

$boardList.innerHTML = posts 