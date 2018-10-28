//Функция #1 "sumOfOther".

function sumOfOther(arr) {
  let sumAll = arr.reduce((sum, current) => sum + current);
  return arr.map((val, i) => sumAll - val);
}


