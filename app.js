const http = require("https");
const fs = require("fs");
const options = {
  hostname:"en.wikipedia.org",
  port:443,
  path:"/wiki/cher",
  method:"GET"
};

const request = http.request(options, res => {
  let responseBody = 
})
