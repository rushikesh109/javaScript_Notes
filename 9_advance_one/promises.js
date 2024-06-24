const promiseOne = new Promise (function (resolve, reject){
    //do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
  console.log("promise consumed");  
})

new Promise(function(){
    setTimeout(function(){
        console.log("async task 2");
    }, 1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve({username:"chai", email:"chai@example"})
    },1000)
})

promiseThree.then(function(user){
console.log(user);
})

const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
let error =false
if(!error){
    resolve({username:"rushi", password:"123"})
}else{
    reject('ERROR: something went wrong')
}
    },1000)
})

const username=promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log("the promise is resolved or rejected");
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"java", password:"123"})
        }else{
            reject('ERROR: j went wrong')
        }
            },1000)
        })

async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response)
    }catch(err){
        console.log(err);
    }

}

consumePromiseFive()

// async function getAllUser () {
//    try{const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    }catch(err){
//     console.log(err);
//    }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>
    console.log(err)
)
