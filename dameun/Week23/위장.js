function solution(clothes) {
  let clothesType = {};
  let result = 1;

  for (let n of clothes) {
    if (clothesType[n[1]] !== undefined) {
      clothesType[n[1]]++;
    } else {
      clothesType[n[1]] = 1;
    }
  }

  for (let n in clothesType) {
    result = result * (1 + clothesType[n]);
  }

  //   if(Object.keys(clothesType).length === 1){
  //     return result;
  //   }
  return result - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);

//다항식
//(1+2)(1+1)
//  2*1 1*1 2*1
