import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import connect from "./Database/conn.js";
import route from "./routes/product.js";

const app = express()

dotenv.config();

app.use(cors())

app.use(express.json())

app.use("/api", route)

//connect to db
connect().then(() => {
    app.listen(9000, () => {
        console.log("Listening on port no 9000 in")
    })
}).catch(err => {
    console.log(err)
})
