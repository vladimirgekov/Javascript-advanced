function sum(elementOne, elementTwo) {
  let num1 = Number(elementOne);
  let num2 = Number(elementTwo);
  let result = 0;
  for (let i = num1; i <= num2; i++) {
    result += i;
  }
  console.log(result);
}
sum("-8", "20");
