function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/// index.js

// Function to check if the array has two elements that sum up to the target
function hasTargetSum(array, target) {
  // Create a map to store the elements and their indices
  const numMap = new Map();

  // Loop through the array
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const complement = target - num;

    // If the complement exists in the map, we found a pair that sums up to the target
    if (numMap.has(complement)) {
      return true;
    }

    // Store the current element and its index in the map
    numMap.set(num, i);
  }

  // If no such pair is found, return false
  return false;
}

module.exports = hasTargetSum;


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
