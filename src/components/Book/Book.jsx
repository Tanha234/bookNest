import React from 'react';

function Book({ book }) {
  const { title, authors, categories, imageLinks } = book.volumeInfo;
  const image = imageLinks?.large || imageLinks?.medium || imageLinks?.small || imageLinks?.thumbnail;

  return (
    <div className="group relative bg-dark rounded-lg shadow-xl border-2 border-gray-200 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Book Image */}
      <img
        src={image || 'https://via.placeholder.com/128x193?text=No+Image'}
        alt={title}
        className="w-1/2 mx-auto mt-10 h-44 object-cover"
      />
      <div className="p-6">
        {/* Book Title */}
        <h4 className=" text-center font-semibold text-gray-900 mb-2">{title}</h4>
        

        {/* Author */}
        <p className="text-sm text-gray-600 mb-2 text-center">
          <strong>Author:</strong> {authors ? authors.join(', ') : 'Unknown Author'}
        </p>

       {/* Categories */}
       {categories && categories.length > 0 ? (
          <p className="text-sm text-gray-700 mb-4 text-center">
            <strong>Categories:</strong> {categories.join(', ')}
          </p>
        ) : (
          <p className="text-sm text-gray-700 mb-4">No categories available</p>
        )}

        {/* Buy Now Button */}
        <a
          href={book.volumeInfo.infoLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 "
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default Book;
