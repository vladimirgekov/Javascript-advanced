function mathOperations(numOne, numTwo, sign) {
  let result = 0;

  switch (sign) {
    case "+":
      result = numOne + numTwo;
      break;

    case "-":
      result = numOne - numTwo;
      break;

    case "*":
      result = numOne * numTwo;
      break;

    case "/":
      result = numOne / numTwo;
      break;

    case "%":
      result = numOne % numTwo;
      break;

    case "**":
      result = numOne ** numTwo;
      break;
  }

  console.log(result);
}
mathOperations(3, 5.5, "*");
