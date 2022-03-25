// Given an array of non negitive numbers
// return true if can jump to last index
// Each value is the number of spaces we can jump. We can jump less than the value if we want
// Else return false

// Loop trhough array backwards. Create valid index and then check if each element is equal to or great than valid index. If it is than set that as new valid index.
// If valid index === 0 than return true. Else return false

// Create function that takes in array
const canJump = (inputArray) => {
  // Check if input array valid
  if (!inputArray) {
    return false;
  }
  // Create valid index variable which we will use to check if each index can be used to reach the end
  let validIndex = inputArray.length - 1;
  // Create a for loop that moes backewards through the array. Index starts at the second to last index
  for (let index = inputArray.length - 2; index >= 0; index -=1) {
    // If the current index plpus the number it represents is greater than or equal to the value indez
    // Then make it the valid index
    if ((inputArray[index] + index) >= validIndex) {
      validIndex = index;
    }
    // If value index is equal to true we can jump to the end so return true
    if (validIndex === 0) {
      return true;
    }
  }
  // Otherwise return false
  return false;
};
// Various test examples
console.log(canJump([2, 3, 1, 1, 4])); // True
console.log(canJump([3, 2, 1, 0, 4])); // False
console.log(canJump([2, 0, 0]));  // true
console.log(canJump([]));  // false
