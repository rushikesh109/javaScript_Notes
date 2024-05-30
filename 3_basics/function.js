function sayMyName() {
    console.log("r")
    console.log("r")
    console.log("r")
    console.log("r")
    console.log("r")
}
// sayMyName()

function addTwoNumber(number1, number2)  {  //parameter
     console.log(number1+number2)
}

    addTwoNumber(3, 78) //arguments

    function addTwoNumber(number1, number2)  {  //parameter
       let result = number1 + number2
       return result
       //console.log("rushi")
   }

   const result = addTwoNumber(4,5)


  // console.log("result:", result);


//  first method for if statement

  function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter a username");
        return
    }
    return '${username} just logged in'
  }

  //console.log (loginUserMessage())

  // second
  
  function loginUserMessage(username="rushi") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return '${username} just logged in'
  }

  ///console.log (loginUserMessage())

  function calculateCartPrice(val1, val2,...num1) { ///... is the rest or spread operator 
 return num1
 
  }
//console.log(calculateCartPrice(200,400,500,400))

const user = {
  username: "rushi",
  price:400
}

function handelObject(anyObject) {
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handelObject(user)

handelObject({
  username: "ru",
  price: 300
})

const myNewArray = [200,400,600,800]
 function returnSecondValue(getArray){
    return getArray[1]
 }
 //console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([200,400,600,800]));
