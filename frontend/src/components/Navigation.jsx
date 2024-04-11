import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/books/details'>Show Book</Link></li>
                <li><Link to='/books/create'>Crete Book</Link></li>
                <li><Link to='/books/edit'>Edit Book</Link></li>
                <li><Link to='/books/delete'>Delete Book</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation