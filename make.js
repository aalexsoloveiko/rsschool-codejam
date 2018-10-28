//Функция #1 "sumOfOther".

function sumOfOther(arr) {
  let sumAll = arr.reduce((sum, current) => sum + current);
  return arr.map((val, i) => sumAll - val);
}


//Функция #2 "make".

function make() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  function total() {
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return total;
  }
  total.toString = function () { return sum };

  return total;
}
console.log(make(15)(34, 21, 666)(41));



var tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
function Test(tree){
    var arr=[];
    for  (var i = 0;i < arr.length;i++){
        
        arr.push(i);
    };
};
console.log(Test);







