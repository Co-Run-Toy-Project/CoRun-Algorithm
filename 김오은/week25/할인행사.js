/**
 *
 * @param {*} want
 * @param {*} number
 * @param {*} discount
 * @returns 총 일수 || 가능한 날 없으면 0
 */
function solution(want, number, discount) {
  let count = 0;
  const list = {};
  want.map((el, idx) => {
    list[el] = number[idx];
  });

  const check = (discount) => {
    // 10개짜리 객체
    let instance = Object.assign({}, list);
    for (let i = 0; i < 10; i++) {
      // 나는 undefined 추가해야 할 듯
      if (Object.keys(instance).includes(discount[i])) {
        instance[discount[i]]--;
      } else {
        return false;
      }
    }
    // return JSON.stringify(instance) === JSON.stringify(list) ? true : false;
    let sum = 0;
    for (const subCategory of Object.values(instance)) {
      sum += subCategory;
    }
    return sum === 0 ? true : false;
  };

  // 10일이면 어차피 -10 안에 결정해야 함.
  for (let i = 0; i < discount.length - 10; i++) {
    // discount 순차적으로 실행하면서 뺐을 때 전부 다 0 되는 인덱스 찾기
    // 키 검사
    if (check(discount.slice(i, i + 10))) {
      count++;
    }
  }

  return count;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);

/**
 * 실패
테스트 1 〉	실패 (46.25ms, 38.4MB)
테스트 2 〉	실패 (64.84ms, 41.1MB)
테스트 3 〉	실패 (44.46ms, 38.6MB)
테스트 4 〉	통과 (19.57ms, 39.3MB)
테스트 5 〉	실패 (20.19ms, 39.8MB)
테스트 6 〉	실패 (6.90ms, 37.9MB)
테스트 7 〉	실패 (15.63ms, 38.6MB)
테스트 8 〉	실패 (71.76ms, 42.9MB)
테스트 9 〉	실패 (13.91ms, 38.5MB)
테스트 10 〉	실패 (24.99ms, 40.4MB)
테스트 11 〉	실패 (9.96ms, 38.1MB)
테스트 12 〉	통과 (0.12ms, 33.4MB)
 */

/**
 * 실패
 * 테스트 1 〉	실패 (1.62ms, 33.9MB)
테스트 2 〉	실패 (5.01ms, 39.7MB)
테스트 3 〉	실패 (2.57ms, 37.1MB)
테스트 4 〉	실패 (3.66ms, 38.1MB)
테스트 5 〉	실패 (3.64ms, 38.6MB)
테스트 6 〉	실패 (0.67ms, 33.8MB)
테스트 7 〉	실패 (2.93ms, 37.3MB)
테스트 8 〉	실패 (6.52ms, 39.6MB)
테스트 9 〉	실패 (3.83ms, 37.4MB)
테스트 10 〉	실패 (4.18ms, 39.3MB)
테스트 11 〉	실패 (3.82ms, 37MB)
테스트 12 〉	통과 (0.11ms, 33.5MB)
 */
