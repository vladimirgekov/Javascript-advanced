function areaAndVolumeCalculator(area, volume, string) {
  let objectArray = JSON.parse(string);
  return objectArray.map((obj) => {
    let areaObj = Math.abs(area.call(obj));
    let volObj = Math.abs(volume.call(obj));
    return { area: areaObj, volume: volObj };
  });
}
