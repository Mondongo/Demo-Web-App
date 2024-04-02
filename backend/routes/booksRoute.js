import express from "express"
import { Book } from "../models/data-model.js"

const router = express.Router()

// route for save a book
router.post('/', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: "sended all requiered fields!!"
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        }
        const book = await Book.create(newBook)
        return res.status(201).send(book)
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message })
    }
})

// route for get all books from db
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({})
        return res.status(200).json({
            count: books.length,
            data: books
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})

// route for get book by ID
router.get('/:_id', async (req, res) => {
    try {
        const { _id } = req.params
        const book = await Book.find({ _id })
        return res.status(200).json(book)
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})

// route for update entry on db
router.put('/:_id', async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: "sended all requiered fields!!" })
        }
        const { _id } = req.params
        const result = await Book.findByIdAndUpdate(_id, req.body)
        if (!result) {
            return res.status(400).send({ message: "book not found" })
        }
        return res.status(200).send({ message: "book updates successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})

// route for delete ID
router.delete('/:_id', async (req, res) => {
    try {
        const { _id } = req.params
        const result = await Book.findByIdAndDelete(_id)

        if (!result) {
            return res.status(404).json({ message: "book not found" })
        }

        return res.status(200).send({ message: "book deleted successfull" })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})

export default router