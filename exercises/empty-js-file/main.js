// Given an array of integers and a target integer, return the indices of 
// // the FIRST two numbers which add up to the target.

// // Assume the same element may not be used twice.

// //

// function twoSum(arr, target){
//     for(let i = 0; i < arr.length; i++){
//         for(let j= i + 1; j< arr.length; j++){
//             let x = arr[i]
//             let y = arr[j]
//             if( x + y === target){
//                 return [i, j]
//             }
//         }
//     }
// }

// console.log(twoSum([1, 2, 3], 4)) // [0, 2]   because 1 + 3 = 4
// console.log(twoSum([5, 2, 8, 40, 5, 12, 6], 20)) // [2, 5]   because 8 + 12 = 20

