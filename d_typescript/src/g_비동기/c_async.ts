export const tmp = ""

//! Async & Await
// : 프로미스를 기반으로 비동기 작업을 간편하게 작성하는 방법

// : async 로 정의된 함수 내에서
// : await 키워드를 사용하여 비동기 작업의 결과를 기다림

// ? 1. async 함수 내에서만 await 사용이 가능
// ? 2. 동기 코드와 유사한 형태로 비동기 코드 작성

// 외부(jsonplaceholder)에서 데이터를 가져오는 함수
// : 시간이 오래걸리는 작업
async function fetchUserData () {
  // 외부와의 연결 시 발생할 오류를 방지
  // : try - catch 블록 사용
  try {
    // 실행할 로직을 작성
    // : 해당 위치에서 오류 발생 시 catch 블록으로 이동

    // 프로미스 객체 : 연산 결과에 따라 성공 또는 실패의 상태를 가짐
    // 거기다 펫취(`url`)을 사용한다 ->  url을 통해 서버에 데이터 요청을 보내고 그 응답을 프로미스 형태로 가져오는 역할을 한다. 성공
    // >> 프로미스가 성공적으로 가져오면 rep 객체를 반환 / 실패시 
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/3`);

    // 정상적으로 들어왔다면~
    if(!response.ok) {
      throw new Error("Fetch Fail");
    }
    const data = await response.json();
    
    console.log("가져온 데이터 ," + data);
    console.log(`가져온 데이터 ,${data}` , data);
    // 객체와 배열은 템프릿 리터럴 `${}`내부에서 출력 할 경우
    // : 데이터 그 자체가 출력되지 x
    

  } catch (error) {
    console.log(`데이터 요청 중 오류,` + error);
    
  }
  
}
fetchUserData();
