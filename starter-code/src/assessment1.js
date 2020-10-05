// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y
}

// Write a function that returns whether a given number is even

function isEven(num) {
  return n % 2==0;
  }
  else {
    return false
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b){
    return a;
  }
  return b;
}

// Return the largest of 3 numbers
var myArray= [1,2,3]

Math.max.apply(null,myArray)
//function maxOfThreeNumbers(a, b, c) {  }

// Calculate the sum of an array of numbers
//function sumArray(numbers) {}
var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
console.log(total)

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  //
}

// Return the longest string in an array
//function longestString(strings) {}
var arr=['a,','aa','aaa']
arr.sort(function (a, b) { return b.length - a.length })[0];

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let result;
  if (wordsArr.length === 0) {
    return false;
  }
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) return true;
  }
  {
    result = false;
  }
  return result;
}

// Finding the first non-duplicate (non-repeating) word in an array

function findUnique(wordsArr) {
  for (var i = 0; i < wordsArr.length; i++) {
    var c = wordsArr.charAt(i);
    if (wordsArr.indexOf(c) == i && wordsArr.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
let person = {
  firstName : 'Tony',
  lastName : 'Stark'
}
function getFullName(personObj) {
  return personObj.firstName + "" + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  var largest = 0,
      largestOrigin = [];

  for(var i = 0; i < matrix.length; i++){ 
      for (var j = 0; j < matrix[i].length; j++) {
          if(matrix[i][j] > largest){
              largest = matrix[i][j];
              largestOrigin = matrix[i];
          }
      }
  }
  return largestOrigin;
}

maxTwoDimArray([[1, 2, 3, 4], [5, 6, 7, 8]]);