function processOddNumbers(arr) {
  console.log(
    arr
      .filter((num, index) => index % 2 == 1)
      .map((num) => num * 2)
      .reverse()
      .join(" ")
  );
}
processOddNumbers([10, 15, 20, 25]);
