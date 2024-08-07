// queryselector로 'button' tag를 선택하고
// button을 눌렀을때 updateName함수가 실행되게 하라
// const button = document.querySelector('button');
// button.addEventListener('click', updateName);

// updateName 에 대한 기능 정의
// prompt창으로 사용자로부터 이름을 입력받고 
// button 요소에 prompt로 부터 받은 내용 넣기
// console.log()에서 확인하기

function updateName() {
  const name = prompt('enter new name');
  button.textContent = `Player 1: ${name}`;
  console.log(`${name}`);
}


// 1. 코드 작성 및 확인 : 개발자 도구 f12 또는 터미널
// 2. 플러그인 설치
// - 코드 스니펫
// - ESlint
console.log('안녕하세요');

//clg : console.log(~~~)
console.log("안녕하세요");

// node 환경에서 파일 실행
// node 파일명.js