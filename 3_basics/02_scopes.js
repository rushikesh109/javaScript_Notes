
let a =300
if (true) {
    let a = 10;
    const b = 20;
   console.log("INNER: ", a);
}

// for (let i=0; i<Array.length; i++){
//     const element = array[i];
// }

// console.log(a);
// console.log(b);
// console.log(c)


function one (){
    const username = "rushi"

    function two() {
        const website ="youtube"
        console.log(username);
    }

    // console.log(website);
     two()
}
// one()

if (true) {
    const username ="rushi"
    if(username==="rushi"){
        const website =" youtube"
        console.log(username + website);

    }
   // console.log(website);
}

//console.log(username);


// ++++++++++++++++++++++++++ intersting ++++++++++++++++++++++++

console.log(addone(5))
function addone(num) {
    return num +1
}

// console.log(addtwo(5))  we cant declear like this 
const addtwo = function(num) {
    return num + 2
}

