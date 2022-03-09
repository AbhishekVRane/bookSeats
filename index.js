const express = require("express");
const app = express();
const route = require("./router");
const responseHandler = require("./m_modules/responseHandler");
const errorHandler = require("./m_modules/errorHandler");
const { PORT, API_BASE_PATH } = require("./config");

app.use(express.json());

//include all route groups in app
route.forEach((eachRoute) => {
  app.use(`${API_BASE_PATH}${eachRoute.path}`, eachRoute.router);
});

//global response handler
app.use(responseHandler);

//global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!!!`);
});
