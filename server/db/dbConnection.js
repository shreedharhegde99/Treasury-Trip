const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDb = async () => {
  return mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log(`Connection to database successful.!`))
    .catch((err) => console.log(err, "Error connecting to database"));
};

module.exports = connectDb;
