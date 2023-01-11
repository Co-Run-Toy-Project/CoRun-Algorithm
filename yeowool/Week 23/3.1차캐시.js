// [PGS] 캐시 / leve2
// 난이도 :  leve2
// 풀이시간 :
// 점수 :

/*
문제
지도개발팀에서 근무하는 제이지는 지도에서 도시 이름을 검색하면 해당 도시와 관련된 맛집 게시물들을 데이터베이스에서 읽어 보여주는 서비스를 개발하고 있다.
이 프로그램의 테스팅 업무를 담당하고 있는 어피치는 서비스를 오픈하기 전 각 로직에 대한 성능 측정을 수행하였는데, 제이지가 작성한 부분 중 데이터베이스에서 게시물을 가져오는 부분의 실행시간이 너무 오래 걸린다는 것을 알게 되었다.
어피치는 제이지에게 해당 로직을 개선하라고 닦달하기 시작하였고, 제이지는 DB 캐시를 적용하여 성능 개선을 시도하고 있지만 캐시 크기를 얼마로 해야 효율적인지 몰라 난감한 상황이다.

어피치에게 시달리는 제이지를 도와, DB 캐시를 적용할 때 캐시 크기에 따른 실행시간 측정 프로그램을 작성하시오.

입력 형식
캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받는다.
cacheSize는 정수이며, 범위는 0 ≦ cacheSize ≦ 30 이다.
cities는 도시 이름으로 이뤄진 문자열 배열로, 최대 도시 수는 100,000개이다.
각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로 구성되며, 대소문자 구분을 하지 않는다. 도시 이름은 최대 20자로 이루어져 있다.
출력 형식
입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간"을 출력한다.
조건
캐시 교체 알고리즘은 LRU(Least Recently Used)를 사용한다.
cache hit일 경우 실행시간은 1이다.
cache miss일 경우 실행시간은 5이다.
입출력 예제
캐시크기(cacheSize)	도시이름(cities)	실행시간
3	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	50
3	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]	21
2	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	60
5	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	52
2	["Jeju", "Pangyo", "NewYork", "newyork"]	16
0	["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	25
/*


<의사코드>
1.모두 소문자 처리한다.
2. 반복문으로 i 번째 도시 이름을 얻는다. 이 세 가지 경우의 수가 존재한다.
  1. 캐시에 i 번째 도시 이름과 같은 객체가 없으면 name이 도시 이름이고 idx가 i인 객체를 cacheArr에 삽입한다.
  2. 캐시에 i 번째 도시 이름과 같은 객체가 없는데 캐시가 차있으면 cacheArr의 맨 앞 객체를 삭제하고 새로운 객체를 cacheArr에 삽입한다.
  3. 캐시에 i 번째 도시 이름과 같은 객체가 있으면 idx를 i로 업데이트한다.
3. cacheArr을 객체의 idx 오름차순으로 정렬한다. idx가 작을수록 앞에 배치해서 캐시를 삭제할 때 앞의 요소를 삭제해서 오래된 객체를 삭제하도록 한다.

*/

function solution(cacheSize, cities) {
  let cacheArr = [];
  let time = 0;
  for (let i = 0; i < cities.length; i++) {
    // 모두 소문자 처리
    cities[i] = cities[i].toLowerCase();
    // 현재 도시 이름과 같은 데이터가 있으면 idx 업데이트
    // 현재 도시 이름과 같은 데이터가 없으면 새로 추가
    // 꽉 차있으면 젤 앞에 데이터 삭제 (idx가 클수록 최근이도록 정렬함)
    let findObj = cacheArr.find((ele) => ele.name === cities[i]);
    if (findObj === undefined) {
      let obj = { name: cities[i], idx: i };
      cacheArr.push(obj);
      time += 5;
      if (cacheArr.length > cacheSize) {
        cacheArr.shift();
      }
    } else {
      let findIdx = cacheArr.indexOf(findObj);
      cacheArr[findIdx].idx = i;
      time += 1;
    }
    // cacheArr를 idx에 따라 정렬 (idx가 클수록 최근이므로 이렇게 정렬)
    cacheArr.sort((a, b) => {
      if (a.idx > b.idx) {
        return 1;
      } else if (a.idx < b.idx) {
        return -1;
      }
    });
    //console.log(cacheArr);
  }
  return time;
}
/*
 테스트 1 〉	통과 (0.21ms, 33.4MB)
테스트 2 〉	통과 (0.29ms, 33.4MB)
테스트 3 〉	통과 (0.26ms, 33.5MB)
테스트 4 〉	통과 (0.24ms, 33.4MB)
테스트 5 〉	통과 (0.13ms, 33.5MB)
테스트 6 〉	통과 (0.10ms, 33.5MB)
테스트 7 〉	통과 (0.32ms, 33.3MB)
테스트 8 〉	통과 (0.23ms, 33.1MB)
테스트 9 〉	통과 (0.33ms, 33.5MB)
테스트 10 〉	통과 (0.56ms, 33.7MB)
테스트 11 〉	통과 (213.73ms, 50.1MB)
테스트 12 〉	통과 (0.27ms, 33.5MB)
테스트 13 〉	통과 (0.46ms, 33.7MB)
테스트 14 〉	통과 (0.58ms, 33.8MB)
테스트 15 〉	통과 (0.96ms, 34MB)
테스트 16 〉	통과 (1.43ms, 34MB)
테스트 17 〉	통과 (0.81ms, 34MB)
테스트 18 〉	통과 (4.22ms, 36.6MB)
테스트 19 〉	통과 (3.23ms, 36.6MB)
테스트 20 〉	통과 (4.70ms, 36.6MB)
 */
