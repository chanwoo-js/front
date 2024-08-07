//const list = document.querySelectorAll("li");



















//*                                                                   //
document.addEventListener("DOMContentLoaded", () => {
  // html 요소를 가져오기
  const inputField = document.querySelector("#search-input");
  const list = document.querySelector("#item-list");
  const items = document.querySelectorAll("li");
  const noResult = document.querySelector("#no-result");

  // 검색어 입력 시 이벤트 핸들러 정의
  inputField.addEventListener("input",() =>{
    // input 요소의 입력값 가져오기
    let value = inputField.value.toLowerCase();
    console.log(value);
    // 보여지는 아이템의 수를 저장하는 변수
    let visibleItemsCount = 0;
    // console.log(visibleItemsCount); 여기는 계속 초기화되서 0으로만 나옴

    items.forEach(item => {
      // item.textContent
      // : html 요소 객체의 내용값

      // 문자열.includes(값)
      // : 데이터 문자열 안에 값의 포함 여부를 boolean으로 반환
      // >> 데이터는 배열, 문자열 사용이 가능

      if (item.textContent.toLocaleLowerCase().includes(value)){
        // display 속성에 "빈 문자열 전달 시"
        // >> css 속성의 display 와 동일 (보여짐)


        item.style.display = "";
        
        visibleItemsCount++;
        // visibleItemsCount console.log() 변경되는 지점
      }else {
        item.style.display = "none"; // 일치하지 않는 경우 : 숨김
      }
    });

    noResult.style.display = visibleItemsCount > 0 ? 'none' : "block";


  })
})