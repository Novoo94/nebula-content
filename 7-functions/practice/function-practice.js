// Define a function called multiplyBy10 that takes in one number argument and returns that number multiplied by 10. Test the function with some numbers.

function multiplyBy10 (a){
    console.log(a *= 10);
}
multiplyBy10(4)



// Define a function called sayGoodbye that uses a name parameter and returns a farewell message incorporating that name.
 

console.log()

function sayGoodbye (name){
    return ("Get home safe " + name )
}
let person = "Jin"
console.log(sayGoodbye(person))


// Define a function called evenNumbers that takes in an array as an argument and iterates over that array and returns a new array with all the even numbers from that input array (Hint: you can use the modulus operator to check whether a number is even or not).
newArray=[]
let myArray = [3,4,28,11,14,15]
function evenNumbers(arr){
   for (let i = 0; i < arr.length; i++ ){
       if(arr[i] %2 ===0){
           newArray.push(arr[i])
           console.log(newArray)
       }
   }
}
evenNumbers(myArray)



// Define a function called reverseWords that takes in a string and returns a string with the order of words reversed

function reverseWords(text){
let reversed = [] //declarimg am empty array to push the reversed values into
    for (let i=text.length - 1;i>=0; i--){  // decrementing through parameter, starting at last index
        reversed.push(text[i])    // pushing each element into new array 
    }console.log(reversed.join(''))   // combines array elements into a string. the empty string removes any space between elements
} 

reverseWords("apple");


