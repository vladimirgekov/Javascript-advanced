function print(arr) {
  const step = Number(arr.pop());
  for (let i = 0; i < arr.length; i += step) {
    console.log(arr[i]);
  }
}
print(["5", "20", "31", "4", "20", "2"]);
