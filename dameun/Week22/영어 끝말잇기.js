function solution(n, words) {
  let passWords = [words[0]];
  let lastWord = words[0];
  let outPeople = 0;
  for (let n = 1; n < words.length; n++) {
    if (lastWord[lastWord.length - 1] !== words[n][0]) {
      outPeople = n;
      break;
    } else if (passWords.includes(words[n])) {
      outPeople = n;
      console.log("?");
      break;
    } else {
      lastWord = words[n];
      passWords.push(lastWord);
    }
  }

  if (outPeople === 0) {
    return [0, 0];
  } else if ((outPeople + 1) % n === 0) {
    return [n, Math.ceil((outPeople + 1) / n)];
  } else {
    return [(outPeople + 1) % n, Math.ceil((outPeople + 1) / n)];
  }
}

solution(3, [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
]);

//6점
// 테스트 1 〉	통과 (0.07ms, 33.6MB)
// 테스트 2 〉	통과 (0.15ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.07ms, 33.4MB)
// 테스트 5 〉	통과 (0.19ms, 33.4MB)
// 테스트 6 〉	통과 (0.09ms, 33.4MB)
// 테스트 7 〉	통과 (0.07ms, 32.9MB)
// 테스트 8 〉	통과 (0.07ms, 33.6MB)
// 테스트 9 〉	통과 (0.11ms, 33.5MB)
// 테스트 10 〉	통과 (0.21ms, 33.5MB)
// 테스트 11 〉	통과 (0.18ms, 33.6MB)
// 테스트 12 〉	통과 (0.11ms, 33.5MB)
// 테스트 13 〉	통과 (0.07ms, 33.5MB)
// 테스트 14 〉	통과 (0.07ms, 33.5MB)
// 테스트 15 〉	통과 (0.09ms, 33.6MB)
// 테스트 16 〉	통과 (0.08ms, 33.4MB)
// 테스트 17 〉	통과 (2.88ms, 33.6MB)
// 테스트 18 〉	통과 (1.90ms, 33.7MB)
// 테스트 19 〉	통과 (1.96ms, 33.6MB)
// 테스트 20 〉	통과 (2.09ms, 33.6MB)
