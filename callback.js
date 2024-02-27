function greeting(value,name){
    value(name);
}

function greetingHandler(name){
    console.log('hey hello',name);
}

function greetEvening(name){
    console.log('good evening',name);
}

// greeting(greetingHandler,'axy');
// greeting(greetEvening,'axy');

function sum(name,age){
    console.log('name is:',name,'age is:',age);
}
function fun(name,age,call){
    console.log('hey hello');
    call(name,age)
}

fun("rifat",26,sum);