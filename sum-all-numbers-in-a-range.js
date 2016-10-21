function sumAll(arr) {
  
  var firstSum = arr[0] + arr[1];
  var secondSum = 0;
  var total;

  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);

  for(var i = min + 1; i< max; i++){

    secondSum += i;
  }
  total = firstSum + secondSum;
  return total;
}

console.log(sumAll([1, 4]));
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);