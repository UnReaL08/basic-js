module.exports = function countCats(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  let cat = '^^'
  for (i = 0; i < arr.length; i++) {
    for (k = 0; k < arr[i].length; k++) {
      if (arr[i][k] === cat) {
        sum = sum + 1;
      }
    }
  }
return sum;
};
