
import React, { useState, useEffect } from 'react';
import './MyLibraryPage.css';

function MyLibraryPage() {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const storedLibrary = JSON.parse(localStorage.getItem('library')) || [];
    setLibrary(storedLibrary);
  }, []);

  const handleRemoveBook = (id) => {
    const updatedLibrary = library.filter((book) => book.id !== id);
    localStorage.setItem('library', JSON.stringify(updatedLibrary));
    setLibrary(updatedLibrary);
  };

  return (
    <div className="library-container">
      <h1>My Library</h1>
      {library.length === 0 ? (
        <p>Your library is empty!</p>
      ) : (
        <ul>
          {library.map((book) => (
            <li key={book.id} className="library-item">
              {book.title} - {book.author}
              <button onClick={() => handleRemoveBook(book.id)} className="remove-button">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyLibraryPage;