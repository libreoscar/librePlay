require('babel-register'); // so we can keep the interesting code in ES6/7

var app = require('./ping-pong.js');
console.log("at here")
app.run();
