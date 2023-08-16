const EventEmitter= require('events');


//const emitter=new EventEmitter(); the emitter object in logger and require.js 
// are different from each other so to solve the problem create a class with
// all the properties of the EventEmitteran with some additional features


class Logger extends EventEmitter (/*Parent or base class*/) 
    { 
// function inside a class is referred as a 
//method so function keyword or syntax is not needed
    log(Loggedin) 
    {
        // Sent an http request
        console.log(Loggedin);
        // raise an event
        this.emit('Logging', {id: 300});
    }
    
}

module.exports = Logger;