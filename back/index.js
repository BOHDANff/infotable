import express from "express"
import 'dotenv/config'
import cors from "cors"
import mongoose from "mongoose";
import TableItemRouter from "./router/TableItemRoute.js";

const PORT = process.env.PORT || 6000
const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}))
app.use(express.json())

app.use('/api/tableItem', TableItemRouter)

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        await app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
    }
    catch (e) {
        console.log(e)
    }
}
start()