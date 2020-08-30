function orderRectangles(data) {
  const recPrototype = {
    area() {
      return this.width * this.height;
    },
    compareTo(otherRec) {
      const currentRecArea = this.area();
      const otherRecArea = otherRec.area();
      return currentRecArea - otherRecArea;
    },
  };
  function createRec(width, height) {
    const result = Object.create(recPrototype);
    result.width = width;
    result.height = height;
    return result;
  }
  return data
    .reduce(function (acc, [width, height]) {
      return acc.concat(createRec(width, height));
    }, [])
    .sort((a, b) => b.compareTo(a) || b.width - a.width);
}
const data = [
  [10, 5],
  [5, 12],
];
const [rec1, rec2] = orderRectangles(data);
