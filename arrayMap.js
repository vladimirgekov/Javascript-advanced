function arrayMap(arr, fn) {
  return arr.reduce((a, b) => [...a, fn(b)], []);
}
