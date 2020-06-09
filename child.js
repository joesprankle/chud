process.on("message", (msg) => {
  console.log("Message from parent:", msg);
});

var tunnel = require("tunnel-ssh");
//map port from remote 3306 to localhost 3306

var config = {
  username: "root",
  password: "THEPASSWORDYOUCREATED",
  host: "3.82.103.221",
  port: 22,
  dstHost: "10.192.21.203",
  dstPort: 3389,
  localHost: "localhost",
  localPort: 3389,
};

var server = tunnel(config, function (error, server) {
  if (error) {
    //catch configuration and startup errors here.
  }
});

// Use a listener to handle errors outside the callback
server.on("error", function (err) {
  console.error("Error Log:", err);
});
