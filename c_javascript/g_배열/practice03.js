//! 함수 & 배열 종합 문제
// 문제 1 : 최소값 찾기
// 주어진 숫자 배열에서 최솟값을 찾는 함수를 작성
function findMin(array) {
  let min = array[0];

  // 배열명.length 키워드 : 배열이 가지는 "속성"(데이터)
  // 배열명.키워드() : 배열이 가지는 "동작"(기능) >> 기능(함수) 호출
  let length = array.length; 

  // 이미 0번쨰는 선택됐기때문에 1번부터
  for(let i = 1; i < length; i++) {
    // 배열의 두번쨰 요소부터 마지막 요소까지 순회 (for) array[i]

    // 현재 순회되는 요소가 min값보다 작으면
    if(array[i] <  min) {
      // 해당 값으로 min을 재할당;
      min = array[i];
    }
  }
  return min;
}

console.log(findMin([10,3,45,32,12]));

// 문제 2 : 홀수 찾기
// >> 주어진 숫자 배열에서 홀수만 추출하여 새로운 배열로 반환하는 함수를 작성

let findOdds = (arr) => {
  // 홀수를 담을 빈 배열을 선언
  let odds = [];
  let length = arr.length;

  for (let i = 0; i < length; i++){
    if(arr[i] % 2 !== 0) {
      // 홀수를 새로운 배열에 담기
      odds.push(arr[i]);
    }
  }
  return odds;
}
console.log(findOdds([14,5,45,3,45,24,423,3434,3,432,2,34,23,423,5,145]))