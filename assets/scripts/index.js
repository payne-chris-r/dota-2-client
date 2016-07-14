'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

// user require with a reference to bundle the file and use it in this file
// let example = require('./example');

const authEvents = require('./auth/events.js');
const gameEvents = require('./games/events.js');
const profileEvents = require('./profiles/events.js');

// On document ready
$(() => {
 authEvents.addHandlers();
 gameEvents.addHandlers();
 profileEvents.addHandlers();
});
