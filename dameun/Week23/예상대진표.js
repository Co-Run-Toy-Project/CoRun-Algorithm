function solution(n, a, b) {
  let member = n;
  let count = 0;
  while (n > 1) {
    count++;
    n = n / 2;
  }
  while (member > 1) {
    if (member / 2 >= a && member / 2 < b) {
      return count;
    } else if (member / 2 >= b && member / 2 < a) {
      return count;
    } else {
      member = member / 2;
      count--;
      if (member < a) {
        a = a - member;
        b = b - member;
      }
    }
  }
}

console.log(solution(8, 5, 7));
