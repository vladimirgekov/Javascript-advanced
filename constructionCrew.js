function constructionCrew(input) {
  let needWater = input.dizziness;

  if (needWater === true) {
    let waterAmountNeeded = 0.1 * input.weight * input.experience;
    input.levelOfHydrated += waterAmountNeeded;
    input.dizziness = false;
  }
  return input;
}
