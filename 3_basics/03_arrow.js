const user = {
    username: "rushi",
    price: 599,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`) // this keyword refere to an object
   console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)


//++++++++++++++++++++++++++++NOTE++++++++++++++++++++++++
//in browser empty global object is window 

// function chai(){
//     let username = "rushi"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//    let username ="rushi"
//    console.log(this.username);
// }

const chai = ( ) => {
    let username = "rushi"
    console.log(this)
}
// chai()

// {}=> {

// this is the arrow function defination
// } 

// const addTwo = (num1, num2) => {
//     return num1 +num2
// }

// const addTwo = (num1, num2) => num1 +num2

// const addTwo = (num1, num2) => (num1 +num2)


const addTwo = (num1, num2) => {username: "rushi"}
console.log(addTwo(3, 4))

// const myArray = [2,5,3,6,7]

// myArray.forEach()