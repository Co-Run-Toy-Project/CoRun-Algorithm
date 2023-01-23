//[PGS] 뉴스 클러스터링
// 정확성  테스트
// 테스트 1 〉	통과 (0.19ms, 33.5MB)
// 테스트 2 〉	통과 (0.19ms, 33.6MB)
// 테스트 3 〉	통과 (0.21ms, 33.5MB)
// 테스트 4 〉	통과 (1.08ms, 33.6MB)
// 테스트 5 〉	통과 (0.26ms, 33.5MB)
// 테스트 6 〉	통과 (0.28ms, 33.5MB)
// 테스트 7 〉	통과 (0.36ms, 33.4MB)
// 테스트 8 〉	통과 (0.19ms, 33.4MB)
// 테스트 9 〉	통과 (0.33ms, 33.5MB)
// 테스트 10 〉	통과 (0.41ms, 33.5MB)
// 테스트 11 〉	통과 (0.68ms, 33.5MB)
// 테스트 12 〉	통과 (0.15ms, 33.4MB)
// 테스트 13 〉	통과 (0.32ms, 33.4MB)

function solution(str1, str2) {
  let Str1 = str1.toLowerCase();
  let Str2 = str2.toLowerCase();

  let arr1 = [];
  let arr2 = [];

  const regex = /[a-z]/g;

  for (let i = 0; i < Str1.length - 1; i++) {
    let letter = Str1[i] + Str1[i + 1];

    if (letter.replace(regex, '').length === 0) arr1.push(letter);
  }

  for (let j = 0; j < Str2.length - 1; j++) {
    let letter = Str2[j] + Str2[j + 1];

    if (letter.replace(regex, '').length === 0) arr2.push(letter);
  }

  if (arr1.length === 0 && arr2.length === 0) return 65536;
  else {
    let common = [];
    let elements = [];

    arr1.map((el, i) => {
      let idx = arr2.indexOf(el);

      if (idx !== -1) {
        // 만약 공통된 문자가 있다면
        common.push(el);
        arr2.splice(idx, 1);
      }
      elements.push(el);
    });

    elements = [...elements, ...arr2];

    return Math.floor((common.length / elements.length) * 65536);
  }
}
