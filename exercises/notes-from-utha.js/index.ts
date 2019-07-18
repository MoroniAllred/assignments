//////ask nate
//re-explain acrecronis vs cencronis
//what is stale data
//what is leaking meamory


import { of, Observable } from "rxjs";
import {map} from "rxjs/operators";

console.clear();


// //////promise
// // lets lear promises

// //note about a promise is that it will go grab the data even if the data is not getting used
// let promise = new Promise((resolve, reject) => {
//     // went to server and got data
//     resolve([1,2,3]);

//     //time gose by and we need to refresh the user
//     setTimeout(()=>{
//         console.log("Resole again")
//         // this is a problem because with a promise you can only use resole once
//         resolve(([1,2,3]));
//     }, 1000);
// });    

// promise.then((data)=>{
//     console.log(data);
// })

// //somewhere way diferent in the app
// promise.then(console.log)

///observables don't exsist in rxjs

//mote on Observable is that the only time the data will be retrived is when it has
    //somthing that is asking for that data


// ////fist example of Observable
// let o = new Observable((observer)=>{
//     //went to the server and got data
//     setTimeout(()=>{
//         observer.next([1,2,3]);
//         //this next line is saying that this should happen in 2 second
//     }, 2000);


// setTimeout(()=>{
//     ///unlike a promise you can call next multiple times
//     console.log("next again")
//     observer.next([1,2,3]);
//     //this next line is saying that this should happen in 1 second
// }, 1000);

// });
// //somewhere else in the app
// o.subscribe((data)=> console.log(data));


// /////second OBserver
// let o = new Observable((observer)=>{
//     //went and got data
//     let i =1;
//     setInterval(()=>{
//         observer.next(i++);
//     }, 1000);
// });

// //somewhere else in the app

// //when you set this ub you are making it so you can stop the data call later by 
//     //saying unsubscribe
// let sub = o.subscribe((data)=> console.log(data));

// /////promise exsample
// ///this is showing that this is happening acencrones
// let p = new Promise((r,j)=>{
//     console.log("creating promise");
//     r("resolving promise");
// });
// p.then((d)=> console.log(d))
// console.log("DONE")

let o = new Observable((o)=>{
    console.log("creating o");
    o.next("resolving o");
});
o.subscribe((dada)=>console.log(data))
console.log("done")

//go look at RxJS

//Utah.js150