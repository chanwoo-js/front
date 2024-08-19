let num1 = Number(prompt("첫번째 숫자를 입력해주세요"));
let num2 = Number(prompt("두번째 숫자를 입력해주세요"));
let num3 = Number(prompt("세번째 숫자를 입력해주세요"));

if ((Number.isNaN(num1)) || (Number.isNaN(num2)) || (Number.isNaN(num3))) {
  alert("숫자를 입력해주세요.")
} else {
  let sum = num1 + num2 + num3;
  let average = sum / 3;
  let max = Math.max(num1, num2, num3);
  console.log(`세 숫자의 합은 ${sum} 입니다.`);
  console.log(`세 숫자의 평균은 ${average} 입니다.`)
  console.log(`세 숫자 중 가장 큰 값은 ${max} 입니다.`);
}