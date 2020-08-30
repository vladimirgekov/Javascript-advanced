function stringLength(strone, strtwo, strthree) {
  let sumString = 0;
  let avrgString = 0;

  let stroneLength = strone.length;
  let strtwoLength = strtwo.length;
  let strthreeLenth = strthree.length;

  sumString = stroneLength + strtwoLength + strthreeLenth;
  avrgString = Math.floor(sumString / 3);

  console.log(sumString);
  console.log(avrgString);
}
stringLength("chocolate", "ice cream", "cake");
