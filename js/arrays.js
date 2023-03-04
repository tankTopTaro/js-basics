let pets = ['Sober', 'Chichi', 'Tipsy', 'Dixie'];
let others = ['pizza', 'chicken', 'palabok'];
let lost = [4, 8, 15, 16, 23, 42]
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

var concatMethod = lost.concat(fibonacci);
// console.log(concatMethod);

var joinMethod = fibonacci.join(' ~ ');

// console.log(joinMethod);
// console.log(typeof joinMethod);
// console.log(typeof fibonacci);
// console.log(lost.shift());
// console.log(lost)
// lost.unshift(1, 2, 3, 4);
// console.log(lost);
// console.log(pets);
// console.log(pets.reverse());
// console.log(pets.sort());
// console.log(others.indexOf('palabok'));
// console.log(concatMethod);
// console.log(concatMethod.lastIndexOf(8));

var filterMethod = concatMethod.filter(x => x <= 55); 

// console.log(filterMethod);
// pets.forEach((pet) => console.log(`howdy ${pet}`));
// console.log(filterMethod.every((num) => num < 10));

console.log(fibonacci.some((num) => num > 50));
console.log(fibonacci.some((num) => num > 100));