//20
const n = prompt("두 숫자를 입력하세요.").split(" ");
const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(`${result} ${left}`);
//split(): 문자열을 공백을 기준으로 분리하여 배열
//Math.floor(number) 주어진 숫자를 내림하여 가장 가까운 정수로 반환