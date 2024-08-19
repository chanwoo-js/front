let numbers = [1,2,3,4,5];
let sum = 0;

const calculateSum = () => {
  for ( let i of numbers) {
    sum += i;
  }
  alert(`배열의 모든 요소의 합은 ${sum} 입니다`)
}
calculateSum();