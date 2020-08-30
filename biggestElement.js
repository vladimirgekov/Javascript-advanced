function biggestElement(arr) {
  var largest = Number.NEGATIVE_INFINITY;
  for (var i = 0; i < arr.length; i++)
    for (var j = 0; j < arr[i].length; j++)
      if (largest < arr[i][j]) largest = arr[i][j];
  console.log(largest);
}
biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
