import dotenv from 'dotenv'
import { app } from './app.js'
import connectDB from './src/db/index.js'

dotenv.config({
    path: "./.env"
})

const port = process.env.port || 4000
// app.get('/', (req, res) => {
//     res.send("Hello World")
// })

connectDB()
.then(()=> {
    app.listen(port, () => {
        console.log("Server is running on port " + port)
    })
})
.catch((err) => {
    console.log("MongoDB connection error", err)
})

