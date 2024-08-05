// ! 문제 1
// add(함수 선언식)
// subtract(함수 표현식)
// multiply (화살표 함수)
// a = 10, b = 5 (매개변수와 인자값 구분)
let a = 10
let b = 5
function add(a,b) {
  console.log(a + b)
}
const subtract = function () {

}
const multiply = () => {

}

// ! 문제2
// 함수의 재사용성과 모듈성 확인 문제
//? 요구사항
// 1. 회사의 직원들을 위해 월별 근무 시간과 시급을 기반으로 급여를 계산하는 프로그램을 작성
// : cal(hours, rate)라는 이름의 함수를 작성
// : 근무 시간 과 시급을 인자로 받고, 총 급여를 계산하여 반환

// 2. 근무 시간이 160시간을 초과할 경우, 초과 근무 시간은 기본 시급의 1.5배로 계산
// : 함수를 작성한 후, 다음 직원들의 근무 정보를 사용하여 급여를 계산하고 출력

// >> 각 직원의 월별 근무 시간과 시급이 다를 수 있기 때문에 유연하게 동작될 수 있는 함수 작성

// 직원 a : 172시간, 시급 20달러
// 직원 b : 160시간, 시급 22달러
// 직원 c : 180시간, 시급 18달러

//? 예상 출력
// 직원 a 급여 : $계산된 금액
// 직원 b 급여 : $계산된 금액
// 직원 c 급여 : $계산된 금액

const cal = (who, hours, rate) => {
  if(hours > 160) {
    let add_hours = hours - 160;
    let add = add_hours * (rate * 1.5)
    return console.log(`직원 ${who}급여 ${(160 * rate) + add} 입니다.`)   
  }
  console.log(`직원 ${who}급여 ${hours * rate} 입니다.`)
}
cal("A",172,20)
cal("B",160,22)
cal("C",180,18)



