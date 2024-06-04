// src/pages/BookshelfPage.jsx
import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';

const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBookshelf);
    }, []);

    const removeFromBookshelf = (book) => {
        const updatedBookshelf = bookshelf.filter(item => item.key !== book.key);
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };
    return (
        <div>
            <h1>My Bookshelf</h1>
            <button onClick={() => window.location.href = '/'}>Books</button>
            <div className="book-results">
                {bookshelf.map(book => (
                    <BookCard key={book.key} book={book} onRemove={removeFromBookshelf} />
                ))}
            </div>
        </div>
    );
};

export default BookshelfPage;
