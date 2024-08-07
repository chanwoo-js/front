//! 객체의 참조 타입 이해

// '원시' 타입 (기본 자료형)
// '참조' 타입 (참료 자료형)
// : 메모리에 저장된 객체의 주소를 저장 (변수에 주소값이 저장)
let computer1 = {
  name : "삼성노트북 북3"
}
let computer2 = computer1; // computer2에는 cmputer1의 주소값이 저장

computer1.name = "맥북";
console.log(computer2); // {name: "맥북"}
// 1에서 값을 바꾸면 2도 1을 참조하기 떄문에 바뀐다.

const changeName = (computer) => {
  computer.name = "아이패드";
}
changeName(computer2);
console.log(computer1.name); // 아이패드


//# === 객체의 복사 (깊복 얕복)
// 1) 얕은 복사
// >> 할당을 통한 복사

// : 속성값이 원시 타입인 경우 그 값이 직접 복사
// : 속성값이 참조 타입인 경우 해당 참조(메모리 주소)만 복사

let animal1 = {
  name : "choco",
  owner: {
    name: "이승아",
    job : "developer"
  }
}

let animal2 = animal1; // 동일한 객체를 참조

//? 복사된 객체의 값을 변경 원본값까지 바꿔버림
animal2.name = "초코";
animal2.owner.name = "이도경";


//? 원본 객체를 출력
console.log(animal1.name); //초코
console.log(animal1.owner.name); //이도경

console.log(animal2); // { name: '초코', owner: { name: '이도경', job: 'developer' } }

// 2) 깊은 복사
// : 원본 객체의 값을 완전히 복제하여 새로운 객체를 생성
// : 원본 객체와 복사본이 서로 독립적

// JSON.parse(JSON.stringfy(object))

// JSON.stringfy(obj)
// : 전달받은 객체를 JSON 문자열로 변환

// JSON.parse(json)
// : JSON 문자열을 JS 객체로 변환 : 새로운 메로리 위치에 할당

let book1 = {
  title : "어린왕자",
  author: "생택쥐페리",
  publishYear : 2024
}

let book2 = JSON.parse(JSON.stringify(book1));

book2.title = 'little prince';
book2.publishYear = 2023;
console.log(book2); // title: 'little prince', author: '생택쥐페리', publishYear: 2023 }
console.log(book1); // { title: '어린왕자', author: '생택쥐페리', publishYear: 2024 }

// JSON 형식
// JAVASCRIPT OBJECT NOTATION (자바스크립트 객체 표기법)

//# 객체의 속성 확인 연산자
// { title: '어린왕자', author: '생택쥐페리', publishYear: 2024 }
// : 속성이 객체에 존재하는지 확인을 위해 IN 연산자를 사용
// >>여부를 boolean 값으로 반환
console.log('title' in book1);//t
console.log('author' in book1);//t
console.log('publishYear' in book1);//t
console.log('hello' in book1);//f

// 속성 삭제
// del : 연산자 사용
// >> 속성 삭제 시 값이 자동 삭제

delete book1.author;
console.log("author" in book1); // f

