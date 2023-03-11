/* let x = 1;

while(x < 10) {
    console.log(x++);
    if(x == 7) break;
} 

let a = 'first scope';
function scopeTest() {
    console.log(a);
}

scopeTest();

let a = 'first scope';
function scopeTest() {
    console.log(a);
    let b = 'second scope'
}

scopeTest();
console.log(b);

let a = 'first scope';
function scopeTest() {
    console.log(a);
    if(a != ''){
        console.log(a + ' I\'m inside an if block');
    }
}

scopeTest();

let a = 'first scope';
function scopeTest() {
    console.log(a);
    if(a != ''){
        console.log(a + ' I\'m inside an if block');
        let c = 'third scope'
    }
    console.log(c)
}

scopeTest();

let a = 'first scope';
function scopeTest() {
    console.log(a);
    a ='second scope';
    if(a != ''){
        console.log(a + ' I\'m inside an if block');
    }
}

scopeTest();
console.log(a);*/

let a = 'first scope';
function scopeTest() {
    console.log(a);
    a ='first scope but inside the function';   // just reinitializing the variable
    let b = 'second scope'
    if(a != ''){
        console.log(a + ' I\'m inside an if block');
        console.log('doobidooba ' + b);
        let c = 'third scope'
    }
}

scopeTest();
console.log(a);