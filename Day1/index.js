import fs from "fs/promises"
import EventEmitter from "events"

// Exercise: Create a simple Node.js application that prints "Hello, world!" to the console.
console.log("Hello World!")

// Exercise: Write a Node.js script that reads a file asynchronously and stores the content in
// a different file and every line should be a new line in the new file.
async function fileCopy() {
    try {
        const data = await fs.readFile('sample.txt', 'utf8');
        await fs.writeFile('new_sample.txt', data);
    } catch (e) {
        console.log(e);
    }
}

fileCopy();

// Exercise 1: Create an event emitter that emits a 'start' event. Write a callback function that
// logs a message when the 'start' event is emitted.
// Import EventEmitter
const emitter = new EventEmitter();
emitter.on("start", () => {
    console.log('start is emitted');
});
emitter.emit("start");

// Exercise 2: Create a function that accepts a callback as a parameter. Inside the function,
// invoke the callback after a 1-second delay.
function delayRun(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

delayRun(() => {
    console.log("run delayed");
});


// Exercise 3 (optional): Create a function that takes two numbers and a callback. The
// function should invoke the callback with the result of adding the two numbers.
