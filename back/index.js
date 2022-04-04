import express from "express"
import 'dotenv/config'
import cors from "cors"
import mongoose from "mongoose";

const PORT = process.env.PORT || 6000
const app = express()
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))
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