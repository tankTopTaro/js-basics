let a = 8;                      // number
let b = '6';                    // string
let c = a + b;
console.log('Answer: ' + c);    // COERCION
b = parseInt(b,10);
c = a + b;
console.log('Answer: ' + c);
let d = 'kevin'
d = parseInt(d,10);
console.log('Answer: ' + d);    // outputs NaN Not a Number
let e = isNaN(d);
console.log('Answer: ' + e);    // outputs boolean True of False

