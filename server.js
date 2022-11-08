const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // SET HEADER CONTENT TYPE
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";
  let url = req.url;

  // ROUTING
  switch (url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;

    default:
      path += "404.html";
      res.statusCode = 404;
  }

  // SEND HTML TO BROWSER
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      req.end();
    }

    res.end(data);
  });
});

// localhost is the default value for 2nd argument
server.listen(3000, "localhost", () => {
  console.log("listeng for requests on port 3000");
});
