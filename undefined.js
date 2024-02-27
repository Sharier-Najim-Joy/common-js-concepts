// 8 ways to get undefined
/*
1. variable that is not initialized will give undefined
2. function will no return
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that does not exits on an object will given you undefined
6. accessing array elements outside of the index range
7. deleting an element inside an array
8. set a value directly to undefined
*/ 
// 1
let first;
// console.log(first);

//  2
function second(a,b){
    const total =a+b
}
// console.log(second(2,3));

// 3

function third(a,b,c){
    const total =a+b+c;
    // console.log(a,b,c);
}
// third(2,3)

//  7
const x =[23,24,25,26,27,28];
// you should not do it.use splice
delete x[1];
console.log(x);

// 8
// not use this
const y =undefined;
// console.log(y);
// use this
const p=null;
// console.log(p);

console.log(typeof undefined);
console.log(typeof null);