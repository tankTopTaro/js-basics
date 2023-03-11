var counter = (function () {
    let count = 0;

    function print(message) {
        console.log(message + '---' + count);
    }

    return {
        value: count,
        get: function(){return count;},
        set: function(value){count = value;},
        increment: function() {
            count++;
            print('After increment');
        },
        reset: function() {
            print('Before reset:');
            count = 0;
            print('After reset');
        }
    }
})();       // IIFE Immediately Invoked Function Expression

counter.get();
counter.set(5);
counter.increment();
counter.increment();
counter.reset();