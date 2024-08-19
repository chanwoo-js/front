// ! 자바스크립트 비동기 프로그래밍 async(비동기적인) / await (기다리다)

// : "async" 함수 내에서 "await"키워드를 사용
// >> 비동기 작업이 완료될 때까지 await 실행을 일시적으로 멈춤

//? async 함수 구조
// : 함수 자체를 비동기 함수로 정의하는 키워드
// async function 함수명() {}
// >> 항상 Promise 객체를 반환

// ? async 함수 내부에서 await 키워드를 사용
// >> Promise의  결과를 기다림 (.then .catch였던)
async function fetchData() {
  // 비동기 작업을 수행
}
//# async await 비동기 예시
// : 사용자의 정보를 가져오는 함수

async function fetchUserData() {
  // fetch("url")함수
  // : 해당 url을 통해 사용하여 서버와 통신을 하는 메서드
  // >> Response 객체를 반환
  let data = await fetch ("https://api.example.com/data"); // 서버와 통신하기 떄문에 시간이 걸리는 작업  // 예시 url
  // 시간이 걸리는 작업을 하고 있는데 뒤 코드가 실행되면 안되기 떄문에 await 를 써야한다.
  let jsonData = await data.json();

  console.log(jsonData);
}

// : await 는 async 내부에서만 사용 가능하다

// >> promise 가 완료 될 때까지 기다림


//#  비동기 작업과 예외 처리
// : 예외 처리 코드와 함께 사용 //* 권장

async function fetchCustomerData() {
  try {
    if(!data.ok) { // data가 없다면
      // throw new Error("네트워크 응답이 실패되었습니다.");  // Error 은 자바스크립트 내장 메서드
      // 에러 발생 후에는 해당 함수 실행이 종료
    }
    //? 실제 로직이 구현되는 블록

    let data = await fetch("url");

 


  let jsonData = await data.json(); // .json() 메서드 : json 형식으로 파싱한다 >> 응답 데이터를 js에서 사용할 수 있도록 객체를 반환
  console.log(jsonData);

  } catch (error) { // try 블록에서 에러 발생 시 해당 에러를 매개변수로 받아 처리
    console.error(error);
    //error.message 속성
    // : 에러 내일 설명이 출력
  
  } 
  
}
fetchCustomerData()