// function total(arr) {
//     // your code here
//     return arr.reduce(function(total, num){
//         return total + num
//     },0)
//  }
 
//  console.log(total([1,2,3])); // 6


//  function stringConcat(arr) {
//     // your code here 
//     return arr.reduce(function(a,b){
//         return a.toString() + b.toString()
//     },)
//  }
 
//  console.log(stringConcat([1,2,3])); // "123"

 function totalVotes(arr) {
    // your code here
    const returnVotes = arr.reduce((final, voter) => {
       if(voter.voted){
         final.voterTotal++
       }
      },{
       voterTotal: 0
      } 
   
   }
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7

//  function shoppingSpree(arr) {
//     // your code here
//     return arr.reduce(function(a,b){
//         return a + b.price  
//     },0) 
//  }
  
    
//  var wishlist = [
//      { title: "Tesla Model S", price: 90000 },
//      { title: "4 carat diamond ring", price: 45000 },
//      { title: "Fancy hacky Sack", price: 5 },
//      { title: "Gold fidgit spinner", price: 2000 },
//      { title: "A second Tesla Model S", price: 90000 }
//  ];
 
//  console.log(shoppingSpree(wishlist)); // 227005

//  function flatten(arr) {
//     // your code here 
//     return arr.reduce(function(a,b){
//     return a + b})
//  }
 
//  var arrays = [
//      ["1", "2", "3"],
//      [true],
//      [4, 5, 6]
//  ];
 
//  console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

//  var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// function voterResults(arr) {
//    // your code here
//    const resultObj = voters.reduce((final, voter) => {
//       if(voter.age > 17 && voter.age <26){
//          final.youth++
//          if(voter.voted){
//             final.youngVotes++
//          }
//       }   
//       if(voter.age > 25 && voter.age < 36){
//          final.mids++
//          if(voter.voted){               
//             final.midVotes++ 
//          }
//       }
//       if(voter.age > 35){
//          final.olds++
//          if(voter.voted){
//             final.oldVotes++
//          }
//       }   
//       return final
//    }, {
//       youngVotes: 0,
//       youth: 0,
//       midVotes: 0,
//       mids: 0,
//       oldVotes: 0,
//       olds: 0
//    })
//    return resultObj 
// }

// console.log(voterResults(voters)); // Returned value shown below:
// /*
// { youngVotes: 1,
//   youth: 4,
//   midVotes: 3,
//   mids: 4,
//   oldVotes: 3,
//   olds: 4 
// }
// */