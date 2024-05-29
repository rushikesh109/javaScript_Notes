// singleton

// object literals 

const mySym = Symbol("key1")
const JsUser = {
    name: "Rushi",
    "full name": "Rushikesh mangrule",
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "rishimangrule@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "rishi@chat.com"
//Object.freeze(JsUser)
JsUser.email = "rishi@micro.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo)
