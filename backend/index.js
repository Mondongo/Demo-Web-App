import express from 'express'
import { PORT, MONGOURL } from './config.js'
import mongoose from 'mongoose'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'


//define server express app
const app = express()

//middleware for parsing request body
app.use(express.json())

//middleware for handling CORS policy
app.use(cors())

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))



app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send(`welcome to mern home`)
})


app.use('/books', booksRoute)





//connect to mongo DB
mongoose.connect(MONGOURL)
    .then(() => {
        console.log(`app connected to DB`);

        app.listen(PORT, () => {
            console.log(`app is running on port: ${PORT}`);
        })
    })
    .catch((err) => {
        console.log(err);
    })