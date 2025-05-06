import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes'
import connectDatabase from './src/config/connectDatabase'

const app = express()
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ["POST", 'GET', 'PUT', "DELETE"]
}))
app.use(express.json()) //đọc được API từ client gởi lên
app.use(express.urlencoded({ extended: true })) // giúp đọc được những data mà client gởi lên

initRoutes(app)
connectDatabase()

const port = process.env.PORT || 8888 // nếu không lấy được port thì lấy 8888 để app không bị chết
const listener = app.listen(port, () => {
    console.log(`Server is running on the port ${listener.address().port}`)
})

