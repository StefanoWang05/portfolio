/* This is an arithmetic solver. It creates two functions which each take two arguements. The add function sums the arguements a returns the results, while the multiply function
multiplies its arguements and returns the product. For example, using this simple arithmetic solver we can solve the math question : 36325 * 9824 + 777 */


var add = function (a, b) {
    return a + b;
  };
  var multiply = function (a, b) {
    return a * b;
  };
  add(multiply(36325, 9824), 777);
