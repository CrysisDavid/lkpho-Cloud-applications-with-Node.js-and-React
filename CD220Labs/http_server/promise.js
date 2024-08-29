//Creating a promise method. The promise will get resolved when timer times out after 6 seconds.
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise resolved");
  }, 6000);
});

//Console log before calling the promise
console.log("Before calling promise");

//Call the promise and wait for it to be resolved and then print a message.
myPromise.then((successMessage) => {
  console.log("From Callback " + successMessage);
});

//Console log after calling the promise
console.log("After calling promise");

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("aqui esta la resolucion");
  }, 6500);
});
console.log("before the message");
promise.then((message) => {
  console.log("nuevo mensaje: " + message);
});
console.log("the message is coming");

fetch("http://api.open-notify.org/astros.json")
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.log("THIS IS THE ERROR", err.message));

// const http = require("http");
// const port = 8010;

// const requestListener = function (req, res) {
//   let greetings;
//   const time = new Date().toLocaleTimeString();
//   const date = new Date().toLocaleDateString();
//   const hours = new Date().getHours();
//   if (hours > 6 && hours < 12) {
//     greetings = "Good morning";
//   } else if (hours >= 13 && hours < 18) {
//     greetings = "Good afternoon";
//   } else if (hours >= 19 && hours < 23) {
//     greetings = "Good evening";
//   } else {
//     greetings = "Good night";
//   }
//   res.writeHead(200);
//   res.end(`the server is up at ${date} at the hour of ${time}, ${greetings}`);
// };
// const server = http.createServer(requestListener);
// server.listen(port);
// console.log(`the server is up on the port ${port}`);
