const express = require("express");

require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dbConnect = require("./db/db");
const router = require("./routes/route");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" })); 
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


dbConnect();
app.use("/api", router);
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});