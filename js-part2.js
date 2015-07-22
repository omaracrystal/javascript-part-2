
// Define a function called oldestPerson that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.
var people =
//This is the 1st object- solution yet to be found {Chuck:22, Brian:46, Christina: 28, Lauren: 24, Ricky: 42, Bob: 56}
//restructured the object within an array to allow iteration.
  [{name: "Chuck", age: 22},
  {name: "Brian", age: 46},
  {name: "Christina", age: 28},
  {name: "Lauren", age: 24},
  {name: "Ricky", age: 42},
  {name: "Bob", age: 56}]
// 1st solution
function oldestPerson(array) {
    var oldest = 0;
    for (var i = 0; i < array.length; i++ ) {
        if (array[i]['age'] > oldest) {
            oldest = array[i]['name'];
        } else if (array[i] > oldest) {
            oldest = array[i]['name'];
        }
    }
    return oldest;
}

//another solution
function oldestPerson(array) {
    var oldest = 0;
    var index;
    for (var i = 0; i < array.length; i++ ) {
        if (array[i]['age'] > oldest) {
            oldest = array[i]['age'];
        index = i;}

    }
    return people[index].name;
}

//trying to find a solution for 1st object
// for (key in people){
//     console.log("people["+ key +"]="+ people[key]);
// }
//
// function oldestPerson(people) {
//   for (var key in oldestPerson) {
//     var value = oldestPerson[key];
//   }
// 
//   return value;
// }


//Define a function called longestWord that takes a string and returns the longest word in the string.
var string = "This is a sentence that needs to be broken up into an array."

function longestWord(string) {
    var array = string.split(' ');
    var longest = 0;
    var word = null;
    array.forEach(function(array) {
        if (longest < array.length) {
            longest = array.length;
            word = array;
        }
    });
    return word;
}
console.log(longestWord(string));
}

//Refactor the longestWord function so that it ignores punctuation.




// Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.

var n= prompt("What number do you want to facatorial?")

function fact(n) {
  if (n < 2) {
    return 1;
  }
  else {
    return n * fact(n - 1);
  }
}

fact(n);

// Bonus: Write a function called palindrome that takes a string as an argument and returns the string in reversed order. Return true if the string is the same as the reversed string, otherwise return false.
