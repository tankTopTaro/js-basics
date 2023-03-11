// LOOPS
for (let i = 0; i < 10; i++) {  // declare the iterator, condition to fulfill, increment of decrement the iterator
    console.log(i);         //  
}

// For loop shorthand
let pets = ['Sober', 'Chichi', 'Tipsy', 'Dixie'];
for(let i = 0; i < pets.length; i++){
    console.log(pets[i]);
}

for (let pet of pets){
    const dog = pet;    // declare a constant variable
    console.log(dog);
}

// WHILE LOOP
let x = 1;
while (x < 10) {
    console.log(x++);    
}

/* while(true){         // INFINITE LOOP
    console.log(x++);
} */

let i = 1;
while(i < 10){
    console.log(i++);
    if (i == 7) break;
}

