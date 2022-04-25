/*
https://github.com/Nebula-Academy/SEV8-Curriculum/blob/main/2-JavaScript-Basics/1-data-types-variables/3-strings/strings-assignments/1-string.assignment.js (*_*)UPDATE THIS LINK(*_*)

Push your code to github, reply with a link:
Steps:
`git add .`
`git commit -m"MESSAGE"`
`git push`
POST LINK

*/
 
// For each exercise you'll want to log the result to the console to check your work

// 1. Concatenate "hello" with "goodbye"

let string1 = 'hello'
let string2 = 'goodbye'
console.log(string1 + ' ' + string2) 


// 2. Save the substring "Friend" from the string "Hello Friend"
let hey = "Hello Friend"
console.log(hey.slice(6,12))



// 3. Using 5 or more of the following words, create a template literal that makes a legible sentence.
//    Do not create your own words, use the existing ones below!
const word1 = "hello"; 
const word2 = "horror";
const word3 = "peace";
const word4 = "world"
const word5 = "dislike"; 
const word6 = "umbrella"; 
const word7 = "car"; 
const word8 = "pasta"; 
const word9 = "pizza"; 
const word10 = "movies";
const word11 = "football"; 
const word12 = "soccer"; 
const word13 = "eat"; 
const word14 = "cookie"; 
const word15 = "favorite";
const word16 = "makeup"; 
const word17 = "I"; 
const word18 = "to"; 
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like"; 

console.log( word17, word23, word18, word13, word9, word21, word17, word22, word23, word18, word13, word8)

// 4. Given the string of your full name get your initials.

let myName = 'Odalis Novoa'
console.log(myName[0]+myName[7])


// 5. Get the 5th character from the following string: 'Hello World'
let dot = 'Hello World'
console.log(dot[5])

// 6. Find the index of the dash from 'Coding-Time!'
let up = 'Coding-Time!'
console.log(up.indexOf('-'))


// 7. Write code to grab the final letter from a any string.
let con = 'Do you want to get a coffee'
// console.log(con.length)
console.log(con[27])


// 8. Write code to grab the first 3 letters from a string. 
let string = 'coconuts '
console.log(string.slice(0,3))

// 9. Turn the following string into an array of words: 'This-is-a-sentence';
let words = 'This-is-a-sentence'
console.log(words)



// 10. Make the string of 12 from the following two numbers:
let one = 1;
let two = 2;
console.log('1' + '2')

// Bonus Given the string of ANY first and last name get the initials. 
// This code needs to be dynamic, no matter the length of the names this code should work.
  // Ex: 
    // Brad Pitt: BP
    // Buzz Lightyear: BL 
    // Rick Grimes: RG