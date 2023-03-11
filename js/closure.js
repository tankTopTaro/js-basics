 function say(name){
    return function(){
        console.log('Boom ' + name);
    }
 }

 let me = say('boom');
 let clap = say('CL4P-TP');

 me();
 clap();

 