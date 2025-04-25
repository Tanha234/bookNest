import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert'; // ✅ Import sweetalert

function BookDetail() {
  const { bookId } = useParams();
  const data = useLoaderData();

  const book = data.items.find((item) => item.id === bookId);

  if (!book) {
    return <p className="text-center text-red-500 mt-10">Book not found.</p>;
  }

  const {
    title,
    authors,
    categories,
    imageLinks,
    language,
    pageCount,
    publisher,
    description,
    infoLink,
  } = book.volumeInfo;

  const image =
    imageLinks?.large || imageLinks?.medium || imageLinks?.small || imageLinks?.thumbnail;

  // ✅ Mark as Read
  const handleMarkAsRead = () => {
    const stored = localStorage.getItem('readBooks');
    const readBooks = stored ? JSON.parse(stored) : [];

    if (!readBooks.find((b) => b.id === book.id)) {
      readBooks.push(book);
      localStorage.setItem('readBooks', JSON.stringify(readBooks));
      swal('Success!', 'Book marked as read!', 'success');
    } else {
      swal('Notice', 'You already marked this book as read.', 'info');
    }
  };

  // ✅ Add to Wishlist
  const handleAddToWishlist = () => {
    const stored = localStorage.getItem('wishlistBooks');
    const wishlist = stored ? JSON.parse(stored) : [];

    if (!wishlist.find((b) => b.id === book.id)) {
      wishlist.push(book);
      localStorage.setItem('wishlistBooks', JSON.stringify(wishlist));
      swal('Added!', 'Book added to wishlist!', 'success');
    } else {
      swal('Notice', 'This book is already in your wishlist.', 'info');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-10 shadow-xl mt-1">
      {/* Left: Book Image */}
      <div className="md:w-1/3 flex justify-center items-start mt-3">
        <img
          src={image || 'https://via.placeholder.com/128x193?text=No+Image'}
          alt={title}
          className="rounded shadow-md w-60 h-auto object-cover"
        />
      </div>

      {/* Right: Info */}
      <div className="md:w-2/3 space-y-4">
        <h3 className="text-2xl font-bold text-indigo-900">{title}</h3>
        <p className="text-lg text-gray-600">
          <strong>Author:</strong> {authors ? authors.join(', ') : 'Unknown Author'}
        </p>
        <p className="text-gray-600">
          <strong>Publisher:</strong> {publisher || 'Unknown Publisher'}
        </p>
        <p className="text-gray-600">
          <strong>Language:</strong> {language?.toUpperCase()}
        </p>
        <p className="text-gray-600">
          <strong>Pages:</strong> {pageCount}
        </p>
        <p className="text-gray-600">
          <strong>Categories:</strong> {categories?.join(', ') || 'N/A'}
        </p>
        <p className="text-gray-700 mt-4">
          <strong>Description:</strong>{' '}
          {description ? (
            <span dangerouslySetInnerHTML={{ __html: description }} />
          ) : (
            'No description available.'
          )}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={handleMarkAsRead}
            className="bg-indigo-900 hover:bg-indigo-800 text-white px-6 py-2 rounded shadow"
          >
            Mark As Read
          </button>
          <button
            onClick={handleAddToWishlist}
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded shadow"
          >
            Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
