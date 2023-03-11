let callback = function print(callback){
    console.log('test')
}

//console.log(typeof callback)

/* task1();
task2();
task3(); 

function task1() {
    console.log('task 1')
}

function task2() {
    console.log('task 2')
}

setTimeout(task1, 2000);
task2();

/* function task3() {
    console.log('task 3')
} 

const message = function () {
    console.log('sumsum')
}

setTimeout(message, 3000);

setTimeout(function(){
    console.log('sup')
}, 3000)

setTimeout(() => {
    console.log('sup')
}, 3000)*/

document.querySelector('#callback__btn').addEventListener('click', function(){
    alert('sup');
});