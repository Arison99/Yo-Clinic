const express = require("express");
const mongoose  = require("mongoose");
const connectDB = require("./db/connection");
const adminRouter = require("./router/admin");
const authRouter = require("./router/auth");
const doctorRouter = require("./router/doctor");
const patientRouter = require("./router/patient");
const publicRouter = require("./router/public");

//connect to mongodb
connectDB();

const app = express();
const PORT = process.env.PORT ||
27017;

//middleware
app.use(express.json());

//routes
app.use("./router/admin", adminRouter);
app.use("./router/auth", authRouter);
app.use("./router/doctor", doctorRouter);
app.use("./router/patient", patientRouter);
app.use("./router/public", publicRouter);

//start the server
app.listen(PORT, () => {
    console.log("server is running on port ${PORT}");
});

  
  