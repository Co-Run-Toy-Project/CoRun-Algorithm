function solution(str1, str2) {
  const union = (arr1, arr2) => {
    let mArr = [];
    let lIdx = 0;
    let rIdx = 0;
    while (lIdx < arr1.length && rIdx < arr2.length) {
      if (arr1[lIdx] < arr2[rIdx]) {
        mArr.push(arr1[lIdx]);
        lIdx++;
      } else if (arr1[lIdx] === arr2[rIdx]) {
        mArr.push(arr1[lIdx]);
        lIdx++;
        rIdx++;
      } else {
        mArr.push(arr2[rIdx]);
        rIdx++;
      }
    }
    for (lIdx; lIdx < arr1.length; lIdx++) {
      mArr.push(arr1[lIdx]);
    }
    for (rIdx; rIdx < arr2.length; rIdx++) {
      mArr.push(arr2[rIdx]);
    }
    return mArr;
  };
  const intersection = (arr1, arr2) => {
    let iArr = [];
    let lIdx = 0;
    let rIdx = 0;
    while (lIdx < arr1.length && rIdx < arr2.length) {
      if (arr1[lIdx] < arr2[rIdx]) {
        lIdx++;
      } else if (arr1[lIdx] > arr2[rIdx]) {
        rIdx++;
      } else {
        iArr.push(arr1[lIdx]);
        lIdx++;
        rIdx++;
      }
    }
    return iArr;
  };
  const toArr = (str) => {
    const result = [];
    const convStr = str.replace(/[^a-zA-Z]/g, " ");
    for (let i = 0; i < str.length - 1; i++) {
      if (convStr[i] !== " " && convStr[i + 1] !== " ") {
        const strItem = convStr.slice(i, i + 2);
        result.push(strItem.toLowerCase());
      }
    }
    return result;
  };

  const strToArr1 = toArr(str1).sort();
  const strToArr2 = toArr(str2).sort();
  if (strToArr1.length === 0 && strToArr2.length === 0) return 65536;
  const unionArr = union(strToArr1, strToArr2);
  const intersectionArr = intersection(strToArr1, strToArr2);
  return parseInt((intersectionArr.length / unionArr.length) * 65536);
}

//https://school.programmers.co.kr/questions/39439
