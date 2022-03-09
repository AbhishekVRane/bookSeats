const healthRoute = require("./health"); // to check health of app
const bookRoute = require("./book"); // seat booking routes

//create array of all route groups
let route = [
  {
    path: "/health",
    router: healthRoute,
  },
  {
    path: "/book",
    router: bookRoute,
  },
];

module.exports = route;
