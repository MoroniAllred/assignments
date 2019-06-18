// function collectAnimals(...str) {  
//     /*and here*/ 
//     console.log(str)
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, ...vegetables){
//      return newArr = {fruit, sweets, vegetables}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"])

// console.log(newArr)

// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
// };
  
//   function parseSentence(){
//     const {location, duration} = vacation
//     return `We're going to have a good time in ${location} for ${duration}`
//   }

//   console.log(parseSentence())

// console.log(parseSentence())

// function returnFirst(items){
//   const firstItem = items[0]; /*change this line to be es6*/
//   return firstItem
// }

// const returnFirst = items => items[0]

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     /*your code here*/
//     const firstFav = favoriteActivities[0] 
//     const secondFav = favoriteActivities[1]
//     const thirdFav = favoriteActivities[2]
//     return ` My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities)) 
//  const arrArr2 = []
// function combineAnimals(...arrArr) {  
//  for(let i = 0; i < arrArr.length; i++){
//    arrArr2.push(...arrArr[i])
//  }
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// // ["dog", "cat", "mouse", "jackolope", "platypus"]
// console.log(arrArr2)

product(a, b, c, d, e) => const numbers = [a,b,c,d,e];

  numbers.reduce(acc, number => {
    return acc * number;
  }, 1)
  
  function product(a, b, c, d, e) {  
    var numbers = [a,b,c,d,e];
  
    return numbers.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }