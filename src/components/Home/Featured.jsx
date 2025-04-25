import React, { useState, useEffect } from "react";

const FeaturedBooks = () => {
  // State to store books data
  const [books, setBooks] = useState([]);

  // Fetch books data from API
  useEffect(() => {
    // Fetch books data using the Google Books API
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter&startIndex=0&maxResults=40");
        const data = await response.json();
        setBooks(data.items); // The books array is under data.items
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  // Get the last 4 books from the fetched data
  const last4Books = books.slice(-4);

  return (
    <div className="py-8  md:px-44 sm:px-0">
      <h2 className="text-3xl text-center font-semibold text-indigo-900 mb-10">
        Featured Books
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {/* Loop through the last 4 books */}
        {last4Books.map((book) => (
          <div key={book.id} className="p-4 border rounded-lg shadow-md">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/150"}
              alt={book.volumeInfo.title}
              className="md:w-74 h-48 object-cover mb-4 mx-auto sm:w-full"
            />
            <h3 className="font-semibold text-md text-center">{book.volumeInfo.title}</h3>
            <p className="text-center text-gray-600"><strong>Author:</strong>{book.volumeInfo.authors?.join(", ") || "Unknown Author"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
