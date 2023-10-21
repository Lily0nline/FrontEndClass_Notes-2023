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
const renderPost = (post) => {
// const posts = MockPosts.map((post) => 
// `<div class="board-list"> <article class="board-card">
// <h3 class="flex-center">
// ${post.title}
// <button>삭제</button>
// </h3> 
// <div class="flex-center">
// ${post.content}
// </div>
// </article>`).join('')
// $boardList.innerHTML = posts 
const $article = document.createElement('article')
const $h3 = document.createElement('h3')
const $deleteBtn = document.createElement('button')
const $content = document.createElement('div')

$h3.className = 'flex-center'
$h3.innerHTML = post.title
$deleteBtn.addEventListener('click', () => console.log('delete!!'))
$deleteBtn.innerText = 'delete'
$h3.append($deleteBtn)

$content.className = 'flex-center'
$content.innerHTML = post.content

$article.className = 'board-card'
$article.setAttribute('data-role', post.id)
$article.addEventListener('click', () => console.log('상세 내용'))
// find, attribute, innerText
// 수정 -> input으로 요소로 바꿔주고 완료 버튼을 누르면 input의 value로 업데이트

$article.append($h3)
$article.append($content)
$boardList.append($article)
}


const deletePost = (event) => {
    console.log(event.target)
    const article = event.target.parentNode.parentNode
    //내가 선택한 post의 id를 알기 위해서
    const postId = article.getAttribute('data-role')

    const deletePostIndex = MockPosts.findIndex((post) => post.id === parseInt(postId))
    MockPosts.splice(deletePostIndex, 1)
    //내가 삭제한 post를 제외한 배열을 만들어주기 위해서

    $boardList.innerHTML = ''
    for(let post of deletePost){
        renderPost({
            ...post
        })
    }
    //포스트 데이터
}

for (let post of MockPosts){
    renderPost({
      ...post 
    })
}

// Create 
// 작성 버튼을 누르면 작성한 내용을 
// 1. MockPosts에 추가한 후 다시 랜더한다.
// 2. append를 활용해서 새로운 게시글을 추가한다.

//작성 인풋(타이틀, 컨텐트), 작성버튼, 
// 1. MockPosts.push(()) -> render
// 2. {title, content} -> boardList append 

const $title = document.querySelector('.title')
const $content = document.querySelector('.content')
const $writeBtn = document.querySelector('.write-btn')

$writeBtn.addEventListener('click', ()=> {
    if(!title.value.trim() || !$content.value.trim()){
        return alert('내용을 입력해주세요')
    }

    //기존에 있던 데이터 + 새로운 게시글 
    MockPosts.push({
        id : Math.floor(Math.random() * 1000000),
        title: $title.value,
        content: $content.value 
    })

    //다시 화면 그린다
    // renderPosts();
    const $article = document.createElement('article')
    $article.className = 'board-card' //css
    $article.innerHTML = `
    <h3 class="flex-center">
    ${post.title}
    <button>삭제</button>
    </h3> 
    <div class="flex-center">
    ${post.content}
    </div>
    `

    $boardList.append($article)

    //인풋 초기화
    $title.value = '';
    $content.value = '';
})