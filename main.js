function makeNegative (number) {

    // write the code for your function here
    if( number > 0) {
        number = number * -1;
        // makes a positive number zero
    } else {
        number;
        // if the number is positve make it negative
    }
    return number;
  }
  
  // call your function here
  makeNegative(1);

  // 2. Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
var babyNum = [1,2,3];
var bigNum = new Array(babyNum.length); //this variable will double those values

for(i = 0; i < babyNum.length; i++) {
    // loops through the previous list total items
    bigNum[i] = babyNum[i] * 2;
    // assigns the value of the new list to the old list times 2 for each value
}

// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

// 3. You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

var givenArr = [6,12,18]; //this array is the given array
var val = 5; //value will check if its inside the array

givenArr.forEach(function(val) {
    if(givenArr[val]) {
        // if 5 is inside the list
        console.log("5 is part of the list")
    } else {
        console.log("5 is not inside the list");
        // if 5 is not part of the list
    }
  });



// write your function here

// call your function here
