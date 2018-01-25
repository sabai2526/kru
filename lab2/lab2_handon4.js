var events = require("events");
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
    console.log("connection successful");
    eventEmitter.emit("data received");
}
eventEmitter.on("connection", connectHandler);
eventEmitter.on("data received", function(){
    console.log("data received successfully.");
});
eventEmitter.emit("connection");
console.log("Program Ended.");
