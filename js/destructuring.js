let a, b,  c, d;

let pets =['chichi', 'sober', 'tipsy', 'dixie'];

/* [a, b, c, d] = pets;

console.log(a);
console.log(b);
console.log(c);
console.log(d); */

// SPREAD OPERATOR
let others;
[a, b, ...others] = pets
console.log(a);
console.log(b);
console.log(others);

let petName, breed;

/* let Pet = {
    petName: 'chichi',
    breed: 'shih tzu',
    age: 1
}; */

({petName, breed} = {
    petName: 'chichi',
    breed: 'shih tzu',
    age: 1
});

console.log(petName + ' ' + breed)
