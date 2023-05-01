const express = require ('express');
const app = express ();
const morgan = require ('morgan');
require ('dotenv').config ();
const port = process.env.PORT || 8080;
const notFoundMiddleware = require ('./middleware/not-found');
const errorHandlerMiddlerware = require ('./middleware/error-handler');
const adminRoutes = require ('./routes/administrators');
const childrenRoutes = require ('./routes/children');
const teacherRoutes = require ('./routes/teachers');
const classRoutes = require ('./routes/classes');
app.use (express.json ());

//morgan middlerware
app.use (
  morgan (':method :url :status :response-time ms - :res[content-length]')
);
//admin routes
app.use ('/admins', adminRoutes);
//children routes
app.use ('/children', childrenRoutes);
//teachers routes
app.use ('/teachers', teacherRoutes);
//classes routes
app.use ('/classes', classRoutes);

//middleware
app.use (notFoundMiddleware);
app.use (errorHandlerMiddlerware);

const start = () => {
  try {
    app.listen (port, () =>
      console.log (`Example app listening on port ${port}!`)
    );
  } catch (error) {
    console.log (error.message);
  }
};

start ();
