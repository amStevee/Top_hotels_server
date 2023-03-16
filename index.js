const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
  console.log(`Server is running on ${port}`);
});
