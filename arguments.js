function sum(a,b,c){
    // console.log(arguments);
    // console.log(...arguments);
    console.log([...arguments]);
    const total = a+b+c;
    return total;
}

const output=sum(2,3,4,5,6,7,8,9);
console.log(output);