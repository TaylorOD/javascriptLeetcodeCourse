// Given an array of non negitive numbers
// return true if can jump to last index
// Each value is the number of spaces we can jump. We can jump less than the value if we want
// Else return false

const canJump = (inputArray) => {
  if (!inputArray) {
    return false;
  }
  let validIndex = inputArray.length - 1;
  
  for (let index = inputArray.length - 2; index >= 0; index -=1) {
    if ((inputArray[index] + index) >= validIndex) {
      validIndex = index;
    }
    if (validIndex === 0) {
      return true;
    }
  }
  return false;
};

console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
console.log(canJump([2, 0, 0]));