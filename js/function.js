/* function sayHello() {
    var name = 'kevin';
    console.log(`----------------- ${name}`);
}

// sayHello();

let a = sayHello;

a();

function sayHi(name){
    console.log('---------------');
    console.log('Hi ' + name + '!');
}

sayHi('kevin'); */

function calculateTax(amount){
    let result = amount * 0.825;
    return result;
}

let tax = calculateTax(100);

console.log(tax);
