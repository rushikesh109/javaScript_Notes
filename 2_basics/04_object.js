//const tinderUser = new object()
const tinderUser =  {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "rushi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rushi",
            lastname: "Mangrule"
        }
    }
}

//console.log(regularUser.fullname.userfullname.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1, obj2)
//console.log(obj3)

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "rushi"
}

//course.price

const {courseInstructor: ins}= course

//console.log(price);
console.log(ins);

// {
//     "name": "rushi",
//     "coursename" : "js in hindi"
//     "price"="free"
// }

// [
//     {},
//     {},
//     {}
// ]