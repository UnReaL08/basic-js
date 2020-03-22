const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }

  num = parseFloat(sampleActivity);

  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY || !num) {
    return false;
  }
  
  diffActivity =  MODERN_ACTIVITY / num;
  rateConst = 0.693 / HALF_LIFE_PERIOD;
  ln = Math.log(diffActivity);
  age = Math.ceil(ln / rateConst);
  return age;
};
