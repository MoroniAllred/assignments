//////////////////pre
// const person = {
//     name: "John",
//     age: 101,
//     pets: ["cat", "dog"],
//     petObjects: [],
// }
//
// const runForLoop = () => {
//     const {pets} = person;
//     const {petObjects} = person;
//     for (let i = 0; i < pets.length; i++) {
//         const pet = { type: pets[i] }
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         pet.name = name
//         petObjects.push(pet)
//     }
//     return name
// }
//
// runForLoop()
// console.log(person.petObjects)
///////////////////#1
// const carrots = ["bright orange", "ripe", "rotten"]

// const mapVegetables = arr => {arr.map(carrot => ({type: "carrot", name: carrot }))}
//////////////////#2
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const filterForFriendly = arr => arr.filter(person => person.friendly)
/////////////////#3
// const doMathSum = (a, b) => a + b

// const produceProduct = (a, b) => a * b


//////////////////#4
// const printString = (firstName, lastName, age) =>  `Wow ${firstName} ${lastName} you are ${age}`




// const person = {
//     firstName: "Jane",
//     lastName: "doe",
//     age: 100
// }
// console.log(printString(person.firstName, person.lastName, person.age))
///////////////////#5
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
 const filterForDogs = arr => arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
console.log(filterForDogs(animals))