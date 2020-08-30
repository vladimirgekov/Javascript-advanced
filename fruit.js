function fruit(arg1, arg2, arg3) {
  let fruit = arg1;
  let fruitWeight = arg2 / 1000;
  let fruitPriceperKg = arg3;
  let fruitPrice = fruitPriceperKg * fruitWeight;

  console.log(
    `I need $${fruitPrice.toFixed(2)} to buy ${fruitWeight.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
fruit("orange", 2500, 1.8);
