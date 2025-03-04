import express from 'express'
import cors from "cors"
import healthCheckRouter from './src/routes/healthcheck.routes.js'
import cookieParser from 'cookie-parser'
const app = express()

app.use(cors(
    {
        origin: "process.env.CORS_ORIGIN",
        credentials: true
    }   
))

//common middlewares
app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended: true}))
app.use(express.static('public'))
app.use(cookieParser())
//routes
app.use("/api/v1/healthcheck", healthCheckRouter)

export { app }