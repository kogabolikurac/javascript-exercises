function removeFromArray(arr, ...nums) {
  const newArray = []

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    let elementInNums = false

    for (let j = 0; j < nums.length; j++) {
      if (element === nums[j]){
        elementInNums = true
      }
    }
    if(!elementInNums){
      newArray.push(element)
    }
  }
  return newArray
  }
  
// Do not edit below this line
module.exports = removeFromArray;
