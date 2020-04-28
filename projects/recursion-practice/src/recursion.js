// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // **BASE** If n is negative, return null
  if (n < 0) {
    return null;
  // Otherwise, if n is 0, return 1
  } else if (n === 0) {
    return 1;
  }
  // **RECURSIVE** multiply n by factorial n - 1
  return n * factorial(n - 1);
};
 
// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // **BASE** If array is empty, return 0
  if (!array.length) {
    return 0;
  }
  // **RECURSIVE** Return the first value of array added to the output of the function ran with the first value removed
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15

var arraySum = function(array) {
  // if (!array.length) {
  //   return 0
  // }
  
  // if (!Array.isArray(array[0])) {
  //   return array[0] + arraySum(array.slice(1))
  // } else {
  //   return array[0][0] + arraySum(array.slice(1))
  // }
};

// 4. Check if a number is even.
var isEven = function(n) {
  // Set n to its absolute value
  n = Math.abs(n);
  // **BASE** If n is 0, return true
  if (n === 0) {
    return true;
  // If n is 1, return false
  } else if (n === 1) {
    return false;
  }
  // **RECURSIVE** Subtract 2 from n and run it through again
  return isEven(n - 2);
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // **BASE** if n is 0, return 0 
  if (n === 0) {
    return 0;
  }
  //If n is negative then add 1, otherwise subtract 1
  n < 0 ? n++ : n--;
  // **RECURSIVE** Return n added to the result of running n through again
  return n + sumBelow(n);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]


var range = function(x, y) {
// Set modify direction based on which argument is larger
var modify = x > y ? -1 : 1; 
// If x and y are the same or if x is 1 value away from y, 
if(x === y || x === y - modify) { 
    // return empty array
    return [];
}
// **RECURSIVE** Return - inside of concat to empty array, return x incremented in direction set by modify, 
// along with the result of that value and y passed to the function again
return [].concat(x + modify, range(x + modify, y));
}

// var range = function(x, y) {
//   let arr = []
//   if (x === y - 1) {
//     return arr
//   }
//   x++
//   arr.push(x)
//   return x + range (x, y)
// };

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // **BASE** If exp is 0, return 1
  if (exp === 0) {
    return 1;
  }
  // **RECURSIVE** If exp is negative, return 1 divided by recursive call with the same base and the exp as positive
  if (exp < 0) {
    return 1 / exponent(base, -exp);
  // Otherwise, return the base times the result of a recursive call with the same base and exp - 1
  } else {
    return base * exponent(base, exp - 1);
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // **BASE** If n is 1, return true 
  if (n === 1) {
    return true;
  // Otherwise, if n is negative, return false
  } else if (n < 1) {
    return false;
  }
  // **RECURSIVE** Divide n by 2 and run it through again - return that value
  return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // **BASE** If string is empty, return an empty string
  if (!string.length) {
    return '';
  }
  // **RECURSIVE** Return last value of string concatenated to the result of the string ran 
  // through again but with the last letter removed
  return string[string.length-1] + reverse(string.slice(0, string.length-1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // Remove all spaces from the string
  string = string.replace(/\s/g, '');
  // If the first letter is not the same as the last letter (not case sensitive), return false
  if (string[0].toUpperCase() !== string[string.length-1].toUpperCase()) {
    return false;
  // Otherwise, if the string is empty or there is only 1 character, return true
  } else if (!string.length || string.length === 1) {
    return true;
  }
  // Return the palindrome function on the string again but this time with the first and last characters removed
  return palindrome(string.slice(1, string.length-1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (x < y * 2) {
    return x - y; 
  } else {
    return modulo(x - y, y);
  }
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (y > 0) {
    return x + multiply(x, y - 1);
  } else {
    return -x - multiply(-x, y + 1);
  }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // **BASE** If both strings are empty, return true
  if (!str1.length && !str2.length) {
    return true;
  }
  // **RECURSIVE** If the first character of both strings are the same, remove the first letter and 
  // run the string through the function again
  if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1));
  }
  // Return false if no other condition was met
  return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  // **BASE** If string is empty, return empty array
  if (!str.length) {
    return [];
  }
  // **RECURSIVE** Return empty array concatenated to first character of string, along
  // with result of a recursive call with the string with the first character removed passed
  return [].concat(str[0], createArray(str.slice(1)));
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  // **BASE** If input array is empty, return empty array
  if (!array.length) {
    return [];
  }
  // **RECURSIVE** Return empty array concatenated to last value of input array, along
  // with result of a recursive call with the last value removed
  return [].concat(array[array.length-1], reverseArr(array.slice(0,array.length-1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // **BASE** If 'length' is 0, return empty array
  if (length === 0) {
    return [];
  }
  // **RECURSIVE** Return array of 'value' concatenated to recursive call with 'value' and 'length' - 1
  return [value].concat(buildList(value, length-1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // **BASE** If array is empty, return 0
  if (!array.length) return 0;
  // **RECURSIVE** Return numeric equivalent of boolean comparison between first value of array and 
  // target value, added to result of recursive call with array with first value removed and the target value passed
  return (array[0] === value) + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // **BASE** If input array is empty, return empty array
  if (!array.length) return [];
  // **RECURSIVE** Return empty array concatenated to result of first value of input 
  // array passed to callback function, along with recursive call with 
  return [].concat(callback(array[0]), rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // If n is negative, return null
  if (n < 0) return null;
  // **BASE** If n is 1, return 1
  if (n === 1) return 1;
  // **RECURSIVE** Recursively call the function twice and add the return values, 
  // where the first recursive call is with n - 1 and the second is with n - 2. 
  return nthFibo(n - 1) + nthFibo(n - 2);
  
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  // **BASE** If input array is empty, return empty array
  if (!input.length) return [];
  // **RECURSIVE** Return empty array concatenated to upper cased first value of input array, 
  // along with result of recursive call with input array but with first value removed
  return [].concat(input[0].toUpperCase(), capitalizeWords(input.slice(1)));
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // **BASE** If input array is empty, return empty array
  if (!array.length) return [];
  // **RECURSIVE** Return empty array concatenated to first letter of first word, concatenated 
  // to the rest of the word, along with the result of a recursive call with the first value of array removed
  return [].concat(array[0][0].toUpperCase() + array[0].slice(1), capitalizeFirst(array.slice(1)));
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
  // **BASE** If string is empty, return obj (defaults to empty obj if not defined via argument)
  if (!str.length) return obj;
  // If object has proprty name of current first character in string, add 1 to its value, 
  // otherwise create key and set it equal to 1
  obj[str[0]] ? obj[str[0]]++ : obj[str[0]] = 1;
  // **RECURSIVE** Return recursive call with string with first letter removed along with current object passed 
  return letterTally(str.slice(1), obj)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // **BASE** If the input array is empty, return the newList array
  if (!list.length) return [];
  // While the first value is the same as the next value in the input array, remove the first value
  while (list[0] === list[1]) {
    list = list.slice(1);
  }
  // **RECURSIVE** Concat empty array to the current first value of the input array along with the recursive 
  //call of this function with the same array but with first value removed
  return [].concat(list[0], compress(list.slice(1)));
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // **BASE** If input array, return the empty array
  if (!array.length) return array
  // If the first and second value of the array are 0, remove the first one using recursive call
  if (array[0] === 0 && array[1] === 0) {
    return minimizeZeroes(array.slice(1))
  }
  // **RECURSIVE** Return empty array concatenated to first value of input array, along with recursive call
  // passing the input array with first value removed as argument
  return [].concat(array[0], minimizeZeroes(array.slice(1)))
};


// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // **BASE** If input array is empty, return empty array 
  if (!array.length) {
    return []
  }
  // **RECURSIVE** Return empty array concatenated to absolute value of first value, negative absolute value of 
  // second value, and the result of recursive call with array with first two values removed passed 
  return [].concat(Math.abs(array[0]), -Math.abs(array[1]), alternateSign(array.slice(2)))
};
// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // If input string is empty, return empty string
  if (!str.length) {
    return str
  // If input is an not array, convert it to one split by spaces
  } else if (!Array.isArray(str)) {
    str = str.split(' ')
  }
  // Check current first value for 0-9 numeric using switch statement, if it has one convert it to word form
  switch (str[0]) {
    case '0':
      str[0] = 'zero'
      break;
    case '1':
      str[0] = 'one'
      break;
    case '2':
      str[0] = 'two'
      break;
    case '3':
      str[0] = 'three'
      break;
    case '4':
      str[0] = 'four'
      break;
    case '5':
      str[0] = 'five'
      break;
    case '6':
      str[0] = 'six'
      break;
    case '7':
      str[0] = 'seven'
      break;
    case '8':
      str[0] = 'eight'
      break;
    case '9':
      str[0] = 'nine'
      break;
  }
  // Return empty array concatenated to first value of array, along with result of recursive call
  // passing input array with first value removed as argument - join final result to string
  return [].concat(str[0], numToText(str.slice(1))).join(' ')
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
