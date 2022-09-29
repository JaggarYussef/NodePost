require("dotenv").config();
import express from "express";
import cors= require('cors');

const app = express();

//middleware
app.use(express.json());
app.use(cors());

const port= process.env.PORT;

app.listen(port, () => console.log(`Server is running on PORT ${port}`))

app.get("/", (req, res) => {
    res.send('first page')
})