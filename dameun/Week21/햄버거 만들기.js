function solution(ingredient) {
  let string = ingredient.join("");

  return makeBugger(string, 0);
}

function makeBugger(ingredient, done) {
  console.log(ingredient);
  let count = ingredient.replace(/1231/, "");
  if (count.length === ingredient.length) {
    return done;
  } else {
    return makeBugger(count, done + 1);
  }
}

solution([1, 1, 2, 3, 1, 2, 3, 1]);

//재귀로 풀면 해결 X
