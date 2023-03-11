/* let hi = () => {
    console.log('sus');
}
hi(); 

let hi = (name) => {
    console.log(`Your ${name}`);
}
hi('chichi');

let add = (a, b) => {
    return a + b;
}

console.log(add(5,2));

let pets = ['chichi', 'sober', 'tipsy', 'dixie'].map((pet) => {
    return `hi ${pet}`;
});

console.log(pets);*/


let pets = ['chichi', 'sober', 'tipsy', 'dixie']
let i = 0;
pets.map((pet) => {
    i++;
    console.log(`hi ${pet}`);
})