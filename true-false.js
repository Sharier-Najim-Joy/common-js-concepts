/*
truthy
1.true
2.any number + or - will be true other than 0
3.any string other than empty string
4.'0','false'
5.empty object or object / empty array or array
falsy
1.false
2.0 or -0
3.''empty string
4.undefined
5.null
*/ 

const x=' ';
if(x){
    console.log('true');
}
else{
    console.log('false');
}
 const sum =true+false;
 console.log(sum);
 const sum1 =false+true;
 console.log(sum1);

 const j =12/"6";
 console.log(j);

