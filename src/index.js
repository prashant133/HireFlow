const connectDB = require("./config/database/db");
const app = require("./app")
require("dotenv").config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Mongo db is running on port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error in connecting MongoDB: ${error}`);
  });
