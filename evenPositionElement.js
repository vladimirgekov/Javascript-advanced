function evenPositionElement(array) {
  let evenIndexed = [];
  for (let i = 0; i <= array.length; i++) {
    if (i % 2 === 0) {
      evenIndexed.push(array[i]);
    }
  }
  console.log(evenIndexed.join(" "));
}
evenPositionElement(["20", "30", "40"]);
