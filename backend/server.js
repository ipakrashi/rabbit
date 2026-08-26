import dotenv from 'dotenv/config'
import express from 'express'
import cors from 'cors'
import dns from 'dns'
dns.setServers(['8.8.8.8', '8.8.4.4'])
import connectDB from './dbConfig/dbConnect.js'
const app = express()
const PORT = process.env.PORT || 3000

//Connection to Database
connectDB()

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// Routes
app.get('/', (req, res) => {
    res.send('<h1>HOME PAGE</h1>')
})

// Custom Error Handlers

// Server Start
app.listen(PORT, () => {
    console.log(`Server Started On Port : ${PORT}`)
})
