//18
const scores = prompt("세과목 성적을 입력하세요.").split(" ");
let sum = 0;
let avg;

for (let i = 0; i < scores.length; i++) {
  sum += parseInt(scores[i], 10);
}

avg = Math.floor(sum / scores.length);
console.log(avg);

//Math.floor(): 주어진 숫자의 소수점 이하는 버리고 가장 가까운 정수 반환
//parseInt():십진수의 형태의 숫자로 데이터 타입을 변환