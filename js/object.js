//typeof array

/* let pets = ['chichi', 2, 'sober', 1];

console.log(typeof pets); */

/* let car = {                 // object declaration
    make: 'bmw',            // these are object attributes
    model: '745li',         // values are written as a pair:
    year: 2023,             // name:value
    getPrice: function() {  // these are methods
        return 5000000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.getPrice());
console.log(car.make + ' ' + car.model + ' ' + car.year)


var car3 = {
    myProperty:[
        {d: 'this'},
        {e: 'can'},
        {f: 'be really'},
        {g: 'confusing'}
    ]
}

console.log(car3.myProperty[3]); */

let contact = {
    customer: [
        {firstName: 'Kevin', lastName: 'Balmores', phoneNumber:['+63 123 234 1212', '+63 123 234 1213']},
        {firstName: 'Sober', lastName: 'Balmores', phoneNumber:['+63 123 234 1214', '+63 123 234 1215']},
    ],
    employees: [
        {firstName: 'Luffy', lastName: '', phoneNumber:['+63 123 234 1216', '+63 123 234 1210']},
        {firstName: 'Nami', lastName: '', phoneNumber:['+63 123 234 1217', '+63 123 234 1211']},
        {firstName: 'Robin', lastName: '', phoneNumber:['+63 123 234 1218', '+63 123 234 1219']},
    ]
}

console.log(contact.customer[0]);

/* function Pet(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.printMe = function(me){
        return console.log(me);
    };
}

Pet.printMe = function() {
    return this
}

let pet1 = new Pet('Sober', 'Shih Tzu', 2);
let pet2 = new Pet('ChiChi', 'Shih Tzu', 1);

console.log(pet1.name);
pet1.printMe('Makulit');

console.log(pet1) */