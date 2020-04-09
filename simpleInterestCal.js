let data = [
  { principal: 2500, time: 1.8 },
  { principal: 1000, time: 5 },
  { principal: 3000, time: 1 },
  { principal: 2000, time: 3 },
];

function interestCalculator(arr) {
  let interestData = [];

  let r;
  for (let j = 0; j < arr.length; j++) {
    let p = arr[j]["principal"];
    let t = arr[j]["time"];
    let i;

    let newData = {};
    newData["interest"] = i;
    newData["principal"] = p;
    newData["time"] = t;
    if (p >= 2500 && t > 1 && t < 3) {
      r = 3;
      i = (p * r * t) / 100;
      newData["rate"] = r;
      newData["interest"] = i;
      interestData.push(newData);
    } else if (p >= 2500 && t >= 3) {
      r = 4;
      i = (p * r * t) / 100;
      newData["rate"] = r;
      newData["interest"] = i;
      interestData.push(newData);
    } else if (p < 2500 || t <= 1) {
      r = 2;
      i = (p * r * t) / 100;
      newData["rate"] = r;
      newData["interest"] = i;
      interestData.push(newData);
    } else {
      r = 1;
      i = (p * r * t) / 100;
      newData["rate"] = r;
      newData["interest"] = i;
      interestData.push(newData);
    }
  }
  console.log(interestData);
  return interestData;
}
interestCalculator(data);
