import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';

function Books() {
  const data = useLoaderData();
  const books = data.items ? [...data.items].reverse() : [];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Book Section */}
      <div className="container mx-auto px-4 py-12 bg-dark">
        <h2 className="text-3xl font-semibold text-center text-indigo-900 mb-10">Popular Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Books;
