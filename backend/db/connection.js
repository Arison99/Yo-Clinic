const mongoose = require("mongoose");
const service=require('../model/service')

const connectDB = async () => {
  try{
    await
mongoose.connect("mongodb://localhost:27017/", {
  userNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
