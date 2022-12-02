const express = require("express");
const app = express();
const mongo = require("./connect")
const dotenv = require("dotenv")
dotenv.config();
mongo.connect();
const cors = require("cors");
app.use(cors());
const Routes = require("./routes/route")
app.use(express.json());
app.use("/", (req, res, next) => {
  var auth = {
    authrised: true
  };
  if (auth.authrised) {
    next();
  } else {
    res.send({ msg: "Not Authorised" })
  }

});

app.use("/order", Routes)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("app is running")
})
