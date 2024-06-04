// src/components/BookCard.jsx
import React from 'react';

const BookCard = ({ book, onAdd, onRemove }) => {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>Edition Count: {book.edition_count}</p>
            {onAdd && <button onClick={() => onAdd(book)}>Add to Bookshelf</button>}
            {onRemove && <button onClick={()=>onRemove(book)}>Remove</button>}
        </div>
    );
};

export default BookCard;
