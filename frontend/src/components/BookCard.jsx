
import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <Link to={`/book/${book.id}`} className="details-link">View Details</Link>
    </div>
  );
}

export default BookCard;