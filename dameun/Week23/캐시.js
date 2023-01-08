function solution(cacheSize, cities) {
  let cashCity = [];
  let times = 0;

  if (cacheSize === 0) {
    return cities.length * 5;
  }
  while (cities.length > 0) {
    let first = cities.shift().toLowerCase();
    if (cashCity.includes(first)) {
      times += 1;
      cashCity.splice(cashCity.indexOf(first), 1);
      cashCity.push(first);
    } else {
      if (cashCity.length === cacheSize) {
        cashCity.shift();
      }
      times += 5;
      cashCity.push(first);
    }
  }
  return times;
}
