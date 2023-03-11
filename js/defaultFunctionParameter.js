/*function greetings(message='Hello'){
    console.log(message);
}

greetings();

greetings('Hi!');

// PARAMETERS vs ARGUMENTS
function add(x, y){
    return console.log(x + y);
}

//console.log(add(5, 5));
add(5, 5);


function say(message) {  
    message = typeof message !== 'undefined' ? message : 'Hi';      // strict inequality (!==)
    console.log(message);
}

say();*/

// Returning NaN
function multiply(a, b) {
    b = typeof b !== 'undefined' ? b : 1;      // strict inequality (!==)
    return console.log(a * b);
}

multiply(5, 2);
multiply(5);