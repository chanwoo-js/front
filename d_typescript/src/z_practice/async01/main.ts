let btn = document.getElementById("fetchUserData");
let inputNum = document.getElementById("userId") as HTMLInputElement;
let divUserData = document.getElementById("userData") as HTMLDivElement;



async function fetchUserData() {
  if (divUserData) {
    // 로딩중일때 표시
    divUserData.innerHTML = `<p>로딩중..</p>`

    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users/${inputNum.value}`);
      // ok라는 정보
      if (!response.ok) {
        throw new Error('사용자 데이터에 접근할 수 없습니다.');
      }
      // 자바스크립트 문법 객체로 바꿔줌
      let data = await response.json();
       
      divUserData.innerHTML = `
      <h2>User Details</h2>
      <p>Id: ${data.id}</p>
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Username: ${data.username}</p>
      <p>Address: ${data.address.street}, ${data.address.city}</p>
      `; 
    } catch (error) {
      divUserData.innerHTML = `<p>${error}</p>`;
      let errorMessage = (error as Error).message;
      console.log(errorMessage);
      
    }
  }
}
  
// 이벤트를 등록할 요소.addEventLisner("이벤트타입", () => {})
// 이벤트를 등록할 요소가 존재하지 않을 경우를 대비하여
// 요소뒤에 ? 사용
// 만약 물음표를 쓰고싶지않다면 if (btn) {}
// ? : null 방지 문법 체계
btn?.addEventListener("click", () => {
  console.log(inputNum.value); 
  fetchUserData();
  }
)
