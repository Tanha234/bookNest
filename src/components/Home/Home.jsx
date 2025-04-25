import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import book from '../../images/books-removebg-preview.png'; // Your default book image
import { FaBook, FaPencilAlt, FaFlask, FaMagic } from 'react-icons/fa';
import Testimonial from './Testimonial';
import FeaturedBooks from './Featured';

function Home() {
  const [bookOfTheMonth, setBookOfTheMonth] = useState(null); // State to store the Book of the Month
  const navigate = useNavigate();

  const handleBrowseBooks = () => {
    navigate('/books');
  };

  // Fetch books data from API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=the+great+adventure&startIndex=0&maxResults=40');
        const data = await response.json();
        const firstBook = data.items ? data.items[0] : null; // Select the first book from the API
        if (firstBook) {
          setBookOfTheMonth({
            title: firstBook.volumeInfo.title,
            description: firstBook.volumeInfo.description,
            image: firstBook.volumeInfo.imageLinks?.thumbnail,
            author: firstBook.volumeInfo.authors ? firstBook.volumeInfo.authors.join(', ') : 'Unknown',
            reason: 'This month’s book was chosen for its thrilling adventure and captivating storyline that keeps readers on the edge of their seats!'
          });
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 sm:grid-cols-1 place-items-center md:px-44 sm:px-0 py-10">
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-3xl font-bold text-indigo-900">Unlock Your Imagination</h1>
          <p className="text-gray-600 text-lg">
            Dive into a world of stories, knowledge, and inspiration with BookNest. Your next adventure is just a page away.Whether you're seeking thrilling adventures, heartwarming tales, or insightful wisdom, we have something for everyone.
  <br />
          </p>
          <button 
            onClick={handleBrowseBooks} 
            className="bg-indigo-900 mt-5 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Browse Books
          </button>
        </div>
        <div>
          <img src={book} className="w-full mx-auto h-1/2" />
        </div>
      </div>

      {/* Featured Books Section */}
      <FeaturedBooks />

      {/* Categories Section */}
      <div className="py-12 md:px-44 sm:px-0 mt-10 mb-5">
        <h2 className="text-3xl text-center font-semibold text-indigo-900 mb-10">Browse By Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          <div className="border border-indigo-900 text-black p-6 rounded-lg text-center">
            <FaBook className="mx-auto text-4xl mb-4 text-indigo-900" />
            <h3 className="text-xl font-semibold text-indigo-900">Fiction</h3>
          </div>
          <div className="border border-indigo-900 text-black p-6 rounded-lg text-center">
            <FaPencilAlt className="mx-auto text-4xl mb-4 text-indigo-900" />
            <h3 className="text-xl font-semibold text-indigo-900">Non-Fiction</h3>
          </div>
          <div className="border border-indigo-900 text-black p-6 rounded-lg text-center">
            <FaFlask className="mx-auto text-4xl mb-4 text-indigo-900" />
            <h3 className="text-xl font-semibold text-indigo-900">Science Fiction</h3>
          </div>
          <div className="border border-indigo-900 text-black p-6 rounded-lg text-center">
            <FaMagic className="mx-auto text-4xl mb-4 text-indigo-900" />
            <h3 className="text-xl font-semibold text-indigo-900">Fantasy</h3>
          </div>
        </div>
      </div>

      {/* Book of the Month Section */}
      {bookOfTheMonth && (
        <div className="py-12 bg-gray-50">
          <h2 className="text-3xl text-center font-semibold text-indigo-900 mb-6">Book of the Month</h2>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
            <img 
              src={bookOfTheMonth.image} 
              alt={bookOfTheMonth.title} 
              className="w-full md:w-full rounded-lg shadow-lg "
            />
            <div className="text-center md:text-left md:px-16">
              <h3 className="text-2xl font-semibold text-indigo-900">{bookOfTheMonth.title}</h3>
              <p className="text-gray-600 mt-2">{bookOfTheMonth.description}</p>
              <p className="text-gray-600 mt-2">Author: {bookOfTheMonth.author}</p>
              <p className="text-gray-600 mt-4 italic">{bookOfTheMonth.reason}</p>
              <button 
                onClick={() => navigate('/book-of-the-month')}
                className="mt-5 bg-indigo-900 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <Testimonial />

    
    </div>
  );
}

export default Home;
