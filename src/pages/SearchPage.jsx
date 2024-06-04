// src/pages/SearchPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    
    const fetchBooks = async (q) => {
        try {
            const res = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10&page=1`);
            setBooks(res.data.docs);
        } catch (error) {
            console.error("Error fetching books: ", error);
        }
    };
    
    const handleSearch = (e) => {
        const q = e.target.value;
        setQuery(q);
        if (q) {
            fetchBooks(q);
        } else {
            setBooks([]);
        }
    };

    const addToBookshelf = (book) => {
        let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        bookshelf.push(book);
        localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    };

    return (
        <div>
            <input type="text" value={query} onChange={handleSearch} placeholder="Search by book name" />
            <div className="book-results">
                {books.map(book => (
                    <BookCard key={book.key} book={book} onAdd={addToBookshelf} />
                ))}
            </div>
            <button onClick={() => window.location.href = '/bookshelf'}>My Bookshelf</button>
        </div>
    );
};

export default SearchPage;
