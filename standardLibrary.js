// path module
const path = require('path');

let pathObj = path.parse(__filename);
console.log(pathObj);

// Output
/* {
  root: '/',
  dir: '/home/pc-115/Desktop/javaScript/backEnd',
  base: 'standardLibrary.js',
  ext: '.js',
  name: 'standardLibrary'
}*/

// OS Module

const os= require('os');

let freeMemory = os.freemem();
let totalMemoy = os.totalmem();
console.log(freeMemory, totalMemoy);

// File System method

const fs=require('fs');
let file= fs.readdirSync('./');
//console.log(file);

fs.readdir('$' , function(err, files){ // To get result use "./" in place of '$'
  if (err)
  console.log("Error", err);
  else
  console.log("Result", files);
})

// Event : Indicates that something has happened
// Such as : HTTP class listens to given port, so every time a request is given to that port
// for each response http creates an event.

const EventEmitter = require("events");
// create an instance of the class
const emitter = new EventEmitter();

// Listener is a function that will be called when an event raised
// register a listner by .addListner or .on
emitter.on('Logged IN', (arg) => {
  console.log("You are logged in successfully", arg); // Argument passed as arg parameter
});

// Raised event
//emitter.emit('Logged IN');

// event argument
emitter.emit('Logged IN', {id: 2001547858, passkey:'@2022'} ) // instead of sending different values combine it in an object
// and then pass it as argument

