// if statement 

// if(condination) {
//     //defination of if statement
// }

    //   > lessthan 
    //   < greaterthan
    //   <= lessthan equal to
    //   >= greaterthanequalto
    //   == equal
    //   != not equal
    //   === check type it is also called as strict  equal

    // if( 2 === "2") {
    //    // console.log("true");
    // }
    // else{
    //   //  console.log(false);
    // }

    // const temperature = 41

    // if(temperature < 50) {
    //     console.log("less than 50");
    // }
    // else{
    // console.log("above 50");
    // }

    const userLoggedIn = true 
    const debitCard = true 
    const userLoggedInFromGoogle = false
    const userLoggedInFromEmail = true

    if (userLoggedIn && debitCard && 2==2) {
        console.log("allow to buy");
    }

    if (userLoggedInFromGoogle || userLoggedInFromEmail) {
        console.log("user logged in");
    }