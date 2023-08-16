const EventEmitter= require('events');


const Logger= require('./logger');
const logger = new Logger();

logger.on('Logging', (arg) => {
    console.log ("Your login id is = ", arg)
});

logger.log('Loggedin');