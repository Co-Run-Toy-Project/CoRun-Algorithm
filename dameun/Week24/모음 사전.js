function solution(word) {
  //총 경우의 수가 7700개정도  > 노가다 가능

  //2번째 방법
  //781>
  //156>
  //31>
  //6>
  //1>
  let result = 0; //index
  let Num = [781, 156, 31, 6, 1];
  const obj = {
    A: 0,
    E: 1,
    I: 2,
    O: 3,
    U: 4,
  };
  for (let n = 0; n < word.length; n++) {
    result += obj[word[n]] * Num[n] + 1;
  }
  return result;
}
