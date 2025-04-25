import React, { useEffect, useState } from 'react'; 
import swal from 'sweetalert';

function ListedBook() {
  const [activeTab, setActiveTab] = useState('read');
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  useEffect(() => {
    const read = JSON.parse(localStorage.getItem('readBooks')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
    setReadBooks(read);
    setWishlistBooks(wishlist);
  }, []);

  const handleDelete = (id, type) => {
    const key = type === 'read' ? 'readBooks' : 'wishlistBooks';
    const books = JSON.parse(localStorage.getItem(key)) || [];
    const updated = books.filter((b) => b.id !== id);
    localStorage.setItem(key, JSON.stringify(updated));
    swal('Deleted!', 'Book has been removed.', 'success');

    // Update UI
    if (type === 'read') {
      setReadBooks(updated);
    } else {
      setWishlistBooks(updated);
    }
  };

  const renderBooks = (books, type) => {
    return books.length ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {books.map((book) => {
          const {
            id,
            volumeInfo: {
              title,
              authors,
              publisher,
              pageCount,
              language,
              categories,
              imageLinks,
              description,
            } = {},
          } = book;

          const image =
            imageLinks?.large ||
            imageLinks?.medium ||
            imageLinks?.small ||
            imageLinks?.thumbnail ||
            'https://via.placeholder.com/128x193?text=No+Image';

          return (
            <div
              key={id}
              className="flex gap-5 border p-5 rounded shadow-md bg-white"
            >
              {/* Book Image */}
              <div className="w-40 flex-shrink-0">
                <img
                  src={image}
                  alt={title}
                  className="rounded w-full h-auto object-cover"
                />
              </div>

              {/* Book Info */}
              <div className="flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-indigo-900">{title}</h3>
                  <p><strong>Author:</strong> {authors?.join(', ') || 'Unknown'}</p>
                  <p><strong>Publisher:</strong> {publisher || 'Unknown'}</p>
                  <p><strong>Pages:</strong> {pageCount || 'N/A'}</p>
                  <p><strong>Language:</strong> {language?.toUpperCase() || 'N/A'}</p>
                  <p><strong>Categories:</strong> {categories?.join(', ') || 'N/A'}</p>
                  <p className="text-sm text-gray-600 line-clamp-4">
                    <strong>Description:</strong>{' '}
                    {description ? (
                      <span dangerouslySetInnerHTML={{ __html: description }} />
                    ) : (
                      'No description available.'
                    )}
                  </p>
                </div>
                {/* Delete Button */}
                <div className="mt-4 text-right">
                  <button
                    onClick={() => handleDelete(id, type)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    ) : (
      <p className="mt-6 text-center text-gray-500">No books to show.</p>
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex justify-center mb-6 last:border-b-0 border-b-2">
        <button
          onClick={() => setActiveTab('read')}
          className={`px-6 py-3 mr-4 rounded-t-lg transition duration-300 ease-in-out transform ${
            activeTab === 'read' ? 'text-indigo-600' : 'text-black'
          }`}
        >
          Read Booklist
        </button>
        <button
          onClick={() => setActiveTab('wishlist')}
          className={`px-6 py-3 rounded-t-lg transition duration-300 ease-in-out transform ${
            activeTab === 'wishlist' ? 'text-indigo-600' : 'text-black'
          }`}
        >
          Wishlist
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'read' ? renderBooks(readBooks, 'read') : renderBooks(wishlistBooks, 'wishlist')}
      </div>
    </div>
  );
}

export default ListedBook;
