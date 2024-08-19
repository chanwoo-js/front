let text = prompt("문자열을 입력해주세요");

// 공백 제거
let trimText = text.trim().replaceAll(' ', '');
console.log(trimText);

// 문자열 분리 + 배열
let splitText = trimText.split("");
console.log(splitText);

// 배열 내 요소 순서 반대로
let reversText = splitText.reverse();
console.log(reversText);

// 배열 내 요소 연결하기 + 대문자로 바꾸기 
let toUpper = reversText.join("").toUpperCase();
console.log(toUpper);