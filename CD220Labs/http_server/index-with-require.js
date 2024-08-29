// Import the HTTP module
const http = require("http");

// Import the 'today' module
const today = require("./today");
// Define the request listener function
const requestListener = function (req, res) {
  let dateValue = new Date().getHours();
  let greetings;
  if (dateValue > 6 && dateValue < 12) {
    greetings = "Good morning";
  } else if (dateValue >= 12 && dateValue < 18) {
    greetings = "Good afternoon";
  } else if (dateValue >= 18 && dateValue < 21) {
    greetings = "Good evening!";
  } else if (dateValue >= 21 && dateValue < 24) {
    greetings = "Good night!";
  }
  console.log(dateValue);
  res.writeHead(200); // Set the status code to 200 (OK)
  // Send the response with the current date from the 'today' module
  res.end(`${greetings} ${today.getDate()}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log("Server listening on port: " + port);
