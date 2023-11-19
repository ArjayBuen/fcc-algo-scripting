function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
      sumBetween += i;
    }
    return sumBetween;
  }
  
  sumAll([1, 4]);
  sumAll([5, 10]) //should return 45
  sumAll([10, 5]) //should return 45


  function diffArray(arr1, arr2) {
    const newArr = [];
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (let i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  [1, "calf", 3, "piglet"], [1, "calf", 3, 4] //should return ["piglet", 4]
  diffArray([], ["snuffleupagus", "cookie monster", "elmo"]); 
  //should return ["snuffleupagus", "cookie monster", "elmo"]
  [1, "calf", 3, "piglet"], [7, "filly"] 
  //should return [1, "calf", 3, "piglet", 7, "filly"]