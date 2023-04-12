require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/todos", require("./routes/todos"));


app.listen(process.env.SERVER_PORT, () => {
    console.log(`server up and running on port ${process.env.SERVER_PORT}`);
}); 