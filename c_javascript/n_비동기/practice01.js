// jsonPlaceholder

// : 무료 REST API 서비스
// >> 가짜 데이터를 제공하는 Mock Server(가짜 서버)
// >> 게시글, 댓글, 사

"https://jsonplaceholder.typicode.com/(원하고자 하는 데이터 배열명)"
"https://jsonplaceholder.typicode.com/(원하고자 하는 데이터 배열명/id)"
"https://jsonplaceholder.typicode.com/(원하고자 하는 데이터 배열명/userid)"

async function fetchPhosts(postId) {
  // try {

    
  // } catch (error) {
    
  // } - try / catch 블록 구조
  
  try {
    // 함수 내의 로직    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    if(!response.ok) {
      throw new Error(`Http error : status : ${response.status}`)
    }
    const posts = await response.json();
    console.log(posts);

  } catch (error) {
    console.error(`게시물 가져오기 실패 : ${error.message} ddd`);
    
  }
}
fetchPhosts();

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))
