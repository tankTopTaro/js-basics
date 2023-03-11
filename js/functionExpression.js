// setTimeout(()=> {

// }, timeout);

// function nameofFunction(){      //a function declaration and an identifier

// }

// setTimeout(function(){      // anonymous function
//     console.log('Wait for 2 seconds')
// }, 2000);

// setTimeout(function(){console.log('Wait for 3 seconds'), 3000}); // an inline block function

// setTimeout(function(){console.log('Wait for 5 seconds'), 5000});
 
// Naming Conventions
// 1. Must start with letter, $(dollar sign), or _(underscore)
// 2. Must not contain any other special characters
// 3. Reserved words cannot be used
let counter = 0;
function countMessage(){
    setTimeout(function(){
        console.log('Count ' + counter++)
        countMessage();
    }, 1000);
};

countMessage();

// Immediately Invoked Function Expression (IIFE)

(function(){
    console.log('IIFE')
})();