const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const config = require('./server/assets/config');
const cors = require("cors");
const app = express();



/*connect to DB*/
mongoose.connect(config.mongooseUrl, {useNewUrlParser: true}, () => console.log("db connected"))
require("./server/models/user.model");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

/* main router */
app.get("*", (_, res) => {
    res.send("welcome"); // should send index.html in react app
});

/* sub router */
const user = require("./server/routes/user.routes");
app.use("/user", user);

/* start server */
const port = process.env.PORT || 4000;
app.listen(port, () => console.log("Server Started!"));
