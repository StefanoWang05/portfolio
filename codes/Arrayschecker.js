/* This code starts by creating a function called areArraysSame that takes two arrays of numbers as arguments. 
It then returns true if the two arrays are the same (that is, they have the same numbers in the same order) and false if they’re different. */

var areArraysSame = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };
