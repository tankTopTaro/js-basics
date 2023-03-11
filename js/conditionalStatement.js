var count = 3;
if(count == 3){
    console.log("THREE")
}

if(count == 4){
    console.log('FOUUUR')
} else {
    console.log('THREEE')
}

if(count == 4){
    console.log('FOUUUR')
} else if(count > 4){
    console.log('FIIIVVE')
} else if (count < 4){
    console.log('THREEE')
} else {
    console.log('AAAAHHHHH')
}

if(count != 4){
    console.log('I CAN\'T COUNT TO FOUUUR')
} else if(count > 4){
    console.log('FIIIVVE')
} else if (count < 4){
    console.log('THREEE')
} else {
    console.log('AAAAHHHHH')
}

// SWITCH STATEMENTS
let hero = 'All Might'

switch (hero) {
    case 'All Might':
        console.log('Never fear, for I am HERE!');
        break;
    case 'Deku':
        console.log('SMASH!!!!');
        break
    default:
        break;
}

// JS DATE OBJECT

let day = new Date().getDay();
switch (day) {
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        break;
}

let lcase = 'hero'
let ucase = 'HERO'

switch (lcase || ucase) {
    case 'abd':
        console.log('some3')
        break;
    case 'hero':
        console.log('some2')
        break;
    case (false):
        console.log('some1')
        break;
    default:
        console.log('default');
}

// TERNARY OPERATOR

let a = '1', b = 1;

let result = (a===b) ? 'equal' : 'not equal';     // if a == b then print 'equal' else 'not equal'

console.log(result);