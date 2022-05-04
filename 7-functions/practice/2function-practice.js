// 1. Write a function that takes in 1 number and returns that number + 1


function addOne (a){
    console.log(a + 1)
}
addOne(19)


// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.

function niight (name){
    return ("Goodnight " + name + " <3")

}
let person = "Jimin"

console.log(niight(person))


// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'

newArray = []
myArray = ['13','14','7','3','20','19']
function helloZero (bro){
    for(let i = 0; i < bro.length; i++){
        if (bro[i] === 0 ){
            return true;
        }
    }
    return false;
}



// 4. Write a function that console logs 'hello world' 10 times to the console. 
function helloTen(text){
    for(let i = 1; i<=10; i++){
    console.log(text)
}
}

helloTen('hello world');

// 5. Write the prior function utilizing a 'fat arrow' function
const hello10 =  (text) => {
    for (let i = 0; i < 10; i++){
        console.log(text)
    }
}


hello10("hey there")



// 6. Write a function that multiplies 3 input numbers together.
function multiyThree (a, b, c,){
    console.log(a * b * c)
}

multiyThree(3, 5, 5)



// 7. Write a function that takes in a number and logs all odd numbers leading up to that number
function randomNum (number){
    
}




// 8. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 







// 9. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator






//10. Write a function which takes in two arrays and returns those arrays combined together. 