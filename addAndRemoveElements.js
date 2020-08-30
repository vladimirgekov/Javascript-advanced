function addRemove(arr) {
  let n = 1;
  let result = [];

  arr.forEach((el) => {
    el === "add" ? result.push(n) : result.pop();
    n++;
  });
  console.log(result.length === 0 ? "Empty" : result.join("\n"));
}
addRemove(["add", "add", "add", "add"]);
addRemove(["add", "add", "remove", "add", "add"]);
