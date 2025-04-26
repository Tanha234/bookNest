import React from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert'; // ✅ Import sweetalert

function BookDetail() {
  const book = useLoaderData(); // ✅ Directly get single book from loader

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

  // Safely handle the image URL from imageLinks
  const image =
    imageLinks?.large ||
    imageLinks?.medium ||
    imageLinks?.small ||
    imageLinks?.thumbnail ||
    'https://via.placeholder.com/128x193?text=No+Image'; // Fallback if no image is found

  console.log("Image URL:", image);  // Log to check the image URL

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
          src={image}
          alt={title}
          className="rounded shadow-md w-60 h-auto object-cover"
          onError={(e) => e.target.src = 'https://via.placeholder.com/128x193?text=No+Image'} // Fallback if image fails to load
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
        <div className="mt-8 flex flex-wrap gap-4">
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
          <a
            href={infoLink}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-indigo-900 border-2 border-gray-700 text-white hover:bg-gray-200 px-6 py-2 rounded shadow inline-block"
          >
            Read Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
