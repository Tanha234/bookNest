import React from 'react';
import { useNavigate } from 'react-router-dom';

function Book({ book }) {
  const navigate = useNavigate();
  const { title, authors, categories, imageLinks, language, pageCount, publisher } = book.volumeInfo;
  const image =
    imageLinks?.large || imageLinks?.medium || imageLinks?.small || imageLinks?.thumbnail;

  const handleClick = () => {
    navigate(`/books/${book.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-dark rounded-lg shadow-xl border-2 border-gray-200 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      {/* Book Image */}
      <img
        src={image || 'https://via.placeholder.com/128x193?text=No+Image'}
        alt={title}
        className="w-1/2 mx-auto mt-10 h-44 object-cover"
      />

      <div className="flex justify-center gap-0 mt-4">
        {/* Page Count Section */}
        <div className="flex items-center bg-gray-100 p-[9px] w-32 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5.25 4.5A2.25 2.25 0 017.5 2.25h9a2.25 2.25 0 012.25 2.25v15a2.25 2.25 0 01-2.25 2.25H7.5a2.25 2.25 0 01-2.25-2.25v-15z"
            />
          </svg>
          <span className="font-semibold text-gray-800">{pageCount} Pages</span>
        </div>

        {/* Language Section */}
        <div className="flex items-center bg-gray-100 p-3 w-25 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.25 17.25a2.25 2.25 0 102.25-2.25 2.25 2.25 0 00-2.25 2.25zM15 5.25a6 6 0 11-6 6 6 6 0 016-6z"
            />
          </svg>
          <span className="font-semibold text-gray-800">{language}</span>
        </div>
      </div>

      <div className="p-6">
        {/* Book Title */}
        <h4 className="text-center font-semibold text-gray-900 mb-2">{title}</h4>

        {/* Author */}
        <p className="text-sm text-gray-600 mb-2 text-center">
          <strong>Author:</strong> {authors ? authors.join(', ') : 'Unknown Author'}
        </p>
        <p className="text-sm text-gray-600 mb-2 text-center">
          <strong>Publisher:</strong> {publisher || 'Unknown Publisher'}
        </p>

        {/* Categories */}
        {categories && categories.length > 0 ? (
          <p className="text-sm text-gray-700 mb-4 text-center">
            <strong>Categories:</strong> {categories.join(', ')}
          </p>
        ) : (
          <p className="text-sm text-gray-700 mb-4 text-center">No categories available</p>
        )}

        {/* Buy Now Button */}
        <a
          href={book.volumeInfo.infoLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="block text-center text-black border-2 border-gray-700 mt-8  px-4 py-2 rounded-md"
        >
         Read Now
        </a>
      </div>
    </div>
  );
}

export default Book;
