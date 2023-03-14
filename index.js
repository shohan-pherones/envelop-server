require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const chatRoute = require("./routes/chatRoute");

// express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// endpoints
app.use("/api/user", userRoute);
app.use("/api/chat", chatRoute);

// port
const PORT = process.env.PORT || 4000;

// connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // listening for requests
    app.listen(PORT, (req, res) => {
      console.log(`connected to db and server running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
