  // ! 구구단 출력기

while (true) {
  // - 사용자로부터 1~9 사이의 숫자를 입력받기 (prompt)
  // const number = Number(prompt("출력할 구구단의 숫자를 입력하세요. (1~9)"))

  // - 입력받은 데이터값을 숫자자료형으로 변환 (Number())
const input = prompt("출력할 구구단의 숫자를 입력하세요 (1~9) // exit를 입력하시면 종료됩니다.")
const number = Number(input)
  // - 숫자로 변환한 해당 값이 1에서 9 사이의 수가 아닌 경우
  //   , 콘솔창에 안내 메시지를 출력
  // - 1 ~ 9사이의 수인 경우
  // 1에서 9를 반복하여 반복한 숫자와 입력된 수를 곱헴하여 출력 

  if (input.toLowerCase() === "exit" ) {
    console.log("프로그램을 종료합니다.")
    //? while문의 무한 루프의 경우 break; 키워드를 만나면 종료
    break;
  }
  if(number >= 1 && number <=9) {
    for(let i=1; i <=9; i++){
      console.log(`${number} X ${i} = ${number * i}`);
    } 
  } else {
      console.log("1에서 9 사이의 숫자를 입력해주세요.")
  }
}