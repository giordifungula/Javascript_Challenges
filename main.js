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
var val = prompt("Entere a number to check if its inside my list"); //value will check if its inside the array
for(var i = 0;i < givenArr.length;i++){
	console.log(givenArr[i]);
	if(val === givenArr[i]){
	console.log(val ,'number is inside the array');
	} else {
	console.log(val,'number is not inside the array');
	}
}


// write your function here

// call your function here

// 4. Bonus Exercise 
// Life isn't always easy as a small word amongst big words. If only they had a code warrior to help them out...

// Your task is to make all words which are 3 characters or less into capitals. 

// You should also remove any vowels from 'long' (4 characters or more) words.

// For example:
// "The quick brown fox jumps over the lazy dog"

// Should become:
// "THE qck brwn FOX jmps vr THE lzy DOG"

// For the purposes of this exercise, mid-word punctuation counts towards the character limit of a word.
// e.g: "it's / I'm" should become: "t's / I'M"
var x = prompt("enter a sentence");
console.log(x);
if(x.length <= 3){
    x.toLowerCase();
} else {
    x.toUpperCase();
    for(var i =0;i < x.length;i++){
        if(x[i]){
            switch(a)
        }
    }
}