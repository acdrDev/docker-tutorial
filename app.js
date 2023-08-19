import express from 'express'
import mongoose from 'mongoose'

const connect = await mongoose.connect("mongodb://mymongodatabase/myfirstdatabase")
const app = express()


app.get('/', (req, res) => {
    res.send("hello guys")
})

app.listen(3000, () => {
    console.log("mongo --> ", connect.connection.db.databaseName)
    console.log('server is running...')
})