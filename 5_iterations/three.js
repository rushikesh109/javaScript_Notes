// for of 

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}

const superhero = "superman"
for (const man of superhero) {
    // console.log(`each char is ${man}`);
    
}

// Maps
// used for unique values do note repeat same values

const map =new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('fr', "France")

// console.log(map);

for (const [i, value] of map) {
    console.log(i, ':-', value);
    
}

// const myObject ={
//     game1:'nfs',
//     game2:'spiderman'
// }
// for (const [key,value] of myObject) {
//     console.log(key, ':-', value );
// }