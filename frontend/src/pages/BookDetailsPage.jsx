
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './BookDetailsPage.css';


const books = [
  {
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "rating": 4.7,
  "description": "A novel set in the Jazz Age that explores themes of wealth, love, and the  American Dream.",
  "publication_year": 1925
  },
  {
  "id": 2,
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "genre": "Fiction",
  "rating": 4.8,
  "description": "A timeless novel of a child's moral awakening and a poignant tale of raceand justice in the American South.",
  "publication_year": 1960
  },
  {
  "id": 3,
  "title": "1984",
  "author": "George Orwell",
  "genre": "Dystopian",
  "rating": 4.6,
  "description": "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
  "publication_year": 1949
  },
  {
  "id": 4,
  "title": "Pride and Prejudice",
  "author": "Jane Austen",
  "genre": "Romance",
  "rating": 4.9,
  "description": "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
  "publication_year": 1813
  },
  {
  "id": 5,
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "genre": "Fiction",
  "rating": 4.3,
  "description": "A story about a young boy’s journey through the challenges of adolescence.",
  "publication_year": 1951
  }
  ]
function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <p>Book not found!</p>;

  const handleAddToLibrary = () => {
    const library = JSON.parse(localStorage.getItem('library')) || [];
    localStorage.setItem('library', JSON.stringify([...library, book]));
    navigate('/mylibrary');
  };

  return (
    <div className="details-container">
      <h1>{book.title}</h1>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <p>{book.description}</p>
      <button onClick={handleAddToLibrary} className="add-button">Add to My Library</button>
    </div>
  );
}

export default BookDetailsPage;