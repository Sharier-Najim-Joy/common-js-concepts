// primitive types are pass by value
let a=5;
let b=7;

function multi(x,y){
    x=7;
    const total=x*y;
    return total;
}
console.log(a);
console.log(multi(a,b));
console.log(a);

// object and array pass by reference
let student1={name:'jalil',partner:'borsha'};
let student2={name:'raj',partner:'anika'};
function makeMovie(couple1,couple2){
    couple1.name='ononto';
    couple2.partner='mim';
 
}
console.log(student1,student2);
makeMovie(student1,student2)
console.log(student1,student2);