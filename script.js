//The below Programs in anonymous function

/*
console.log("a. Print odd numbers in an array:");

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var odd=[];

let result = function (){
  for (var i = 0 ; i< arr.length ; i++) { 
     if (arr [i]%2!=0)  // 0 is even number , Non 0 is add number
      {
       odd.push(arr[i])
    } 
  }
  return odd;

}
console.log(result());
*/

/*
console.log("b. Convert all the strings to title caps in a string array:");

let str = "in britain, after the great war and before the out break of hostilities in 1945.";
let strname = function () {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
 console.log(strname());

 */

 /*
 console.log("c. Sum of all numbers in an array:");
 
 var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

 let add = function(){
   var sum = 0;
   for(var i = 0 ; i< arr.length ; i++){
      sum = sum + arr[i];
    }
    return sum;
 }
 console.log(add());
*/

/*
console.log("d. Return all the prime numbers in an array:");
let isPrime = function(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
// Use an anonymous function to return prime numbers in the array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

let primes = (function(arr) {
    let primeArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeArray.push(arr[i]);
        }
    }

    return primeArray;
})(numbers);
console.log(primes); 
*/

/*
console.log("e. Return all the palindromes in an array:");
let isPalindrome = function(word) {
    return word === word.split('').reverse().join('');
};

// Use an anonymous function to return palindromes in the array
let words = ["syed", "amma", "mom", "time", "wow", "book","game","dad"];
let palindromes = (function(arr) {
    let palindromeArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromeArray.push(arr[i]);
        }
    }
    return palindromeArray;
})(words);
console.log(palindromes); 
*/

/*
console.log("f. Return median of two sorted arrays of the same size.:");


let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort((a, b) => a - b);
    let mid = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
        return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    } else {
        return sortedArray[mid];
    }
})(arr1, arr2);

console.log(median);
*/
/*
console.log("g. Remove duplicates from an array:");
let array = [1,2,2,3,1,7,4,5,5,11,8,6,7,8,8,9,9,10,10];

let uniqueArray = (function(arr) {
    let unique = {};
    arr.forEach(function(item) {
        unique[item] = true;
    });
    return Object.keys(unique).map(Number);
})(array);

console.log(uniqueArray);
*/

/*
console.log("h. Rotate an array by k times:");
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let k = 4;

let rotatedArray = (function(arr, k) {
    let len = arr.length;
    k = k % len; 
    return arr.slice(k).concat(arr.slice(0, k));
})(array, k);

console.log(rotatedArray);
*/

// ***************************************************************************************

//The below Programs in IIFE
/*
console.log("a. Print odd numbers in an array:");

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var odd=[];

function findoddnumber(){
  for (var i = 0 ; i< arr.length ; i++) { 
     if (arr [i]%2!=0)  // false is even number , true is odd number
      {
       odd.push(arr[i])
    } 
  }
  return odd;

}

let result = findoddnumber();
console.log(result)
*/

/*
console.log("b. Convert all the strings to title caps in a string array:");
let str = "slow and steady wins the race";
let capitalizeWords = (function (str) {
    var str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
})(str);
console.log(capitalizeWords); 
*/

/*
console.log("c. Sum of all numbers in an array:");
var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];

(function(arr){
  var sum = 0;
       for(var i = 0 ; i< arr.length ; i++){
          sum = sum + arr[i];
        }
        console.log(sum);
  } )
(arr);
*/

/*
console.log("d. Return all the prime numbers in an array:");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

let primes = (function(arr) {
    let primesArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primesArray.push(arr[i]);
        }
    }

    return primesArray;
})(numbers);

console.log(primes); 

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
*/

/*
console.log("e. Return all the palindromes in an array:");
let words = ["syed", "amma", "mom", "time", "wow", "book","game","dad"];

let palindromes = (function(arr) {
    let palindromeArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromeArray.push(arr[i]);
        }
    }

    return palindromeArray;
})(words);

console.log(palindromes); 

// Function to check if a word is a palindrome
function isPalindrome(word) {
    return word === word.split('').reverse().join('');
}
*/

/*
console.log("f. Return median of two sorted arrays of the same size.:");
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort((a, b) => a - b);
    let mid = Math.floor(sortedArray.length / 2);

    if (sortedArray.length % 2 === 0) {
        return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    } else {
        return sortedArray[mid];
    }
})(arr1, arr2);

console.log(median); 
*/

/*
console.log("g. Remove duplicates from an array:");
let array = [1,2,2,3,1,7,4,5,5,11,8,6,7,8,8,9,9,10,10];

let uniqueArray = (function(arr) {
    let unique = {};
    arr.forEach(function(item) {
        unique[item] = true;
    });
    return Object.keys(unique).map(Number);
})(array);

console.log(uniqueArray);
*/

/*
console.log("h. Rotate an array by k times:");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;

let rotatedArray = (function(arr, k) {
    let len = arr.length;
    k = k % len;
    return arr.slice(k).concat(arr.slice(0, k));
})(array, k);

console.log(rotatedArray);
*/

//*************************************************************************
// //The below Programs in arrow functions.
/*
console.log("a. Print odd numbers in an array:");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var odd=[];

let result = ()=>{
  for (var i = 0 ; i< arr.length ; i++) { 
     if (arr [i]%2!=0)  // false is even number , true is odd number
      {
       odd.push(arr[i])
    } 
  }
  return odd;

}
console.log(result());
*/
/*
console.log("b. Convert all the strings to title caps in a string array:");
var str = "all of us do not have equal talent. but, all of us have an equal opportunity to develop our talents"

var titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  } 
  console.log(titleCase(str));
*/

/*
console.log("c. Sum of all numbers in an array:");

var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];


let add = (arr)=>{
   var sum = 0;
        for(var i = 0 ; i< arr.length ; i++){
           sum = sum + arr[i];
         }
         return sum;
         }
console.log(add(arr));
*/

/*
console.log("d. Return all the prime numbers in an array:");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19];

let primes = ((arr) => {
    return arr.filter(num => {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    });
})(numbers);

console.log(primes);
*/

/*
console.log("e. Return all the palindromes in an array:");
let words = ["syed", "amma", "mom", "time", "wow", "book","game","dad"];

let palindromes = ((arr) => {
    return arr.filter(word => {
        return word === word.split('').reverse().join('');
    });
})(words);

console.log(palindromes); 
*/

// **************************************The End**************************************
