function extractSubsequence(arr) {
  let bigger = arr[0];
  let result = [];

  arr.map((x) => {
    if (x >= bigger) {
      result.push(x);
      bigger = x;
    }
  });
  console.log(result.join("\n"));
}
extractSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
