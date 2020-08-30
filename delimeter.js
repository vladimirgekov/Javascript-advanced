function delimeter(arr) {
  let del = arr.pop();
  console.log(arr.join(del));
}
delimeter(["One", "Two", "Three", "Four", "Five", "-"]);
