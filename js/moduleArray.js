let a = [4, 8, 1, 16, 23, 54];
let b = ['red', 'blue', 'green', 'yellow', 'indigo'];

console.log(a[0]);
console.log(a[3]);
console.log(a[7]);
console.log(a[-1]);

a[6] = 30;
a[8] = 30;
console.log(a);
console.log(typeof a);

let c = [40, 'red', true];
console.log(c);
console.log(typeof c);

console.log(b.length)

let e = [10, 20, 30, 40, 50, 60];
e[10] = 100;
console.log(e);
console.log(e.length);
e.push(20);
console.log(e);
console.log(e.length);
e.pop();
e.pop();
e.pop();
e.pop();
e.pop();
e.pop();
e.pop();
e.pop();
console.log(e);
console.log(e.length);

let f = a[1] + a[8];
console.log(f);
