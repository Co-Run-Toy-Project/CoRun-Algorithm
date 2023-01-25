// function solution(progresses, speeds) {
//     let result = [];
//     let copyArr = [...progresses]
//     while(copyArr.length > 0){
//         for(let n = 0; n<progresses.length;){
//             copyArr[n] += speeds[n];
//         }
//     }
// }

//근데 스택/큐 쓰라고 되어있네?
//https://miiingo.tistory.com/355

function solution(progresses, speeds) {
  let result = [0];
  let DoneDays = progresses.map((el, index) =>
    Math.ceil((100 - el) / speeds[index])
  );
  //끝나는 날들의 배열
  let First = DoneDays[0];

  for (let n = 0, m = 0; n < DoneDays.length; n++) {
    if (DoneDays[n] <= First) {
      result[m] += 1;
    } else {
      First = DoneDays[n];
      result[++m] = 1;
      //간단히 보면 전위전산자(++i)는 값이 먼저 증가하고 작업이 수행되며
      //후위연산자(i++)는 작업이 수행된 후에 값이 증가한다고 배웠다.
    }
  }
  return result;
}
