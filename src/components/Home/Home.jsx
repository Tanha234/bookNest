import React from 'react';
import book from '../../images/books-removebg-preview.png';
import { FaBook, FaPencilAlt, FaFlask, FaMagic } from 'react-icons/fa';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className='grid md:grid-cols-2 sm:grid-cols-1 place-items-center md:px-44 sm:px-0 py-10'>
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold text-indigo-900">Unlock Your Imagination</h1>
          <p className="text-gray-600 text-lg">
            Dive into a world of stories, knowledge, and inspiration with BookNest. Your next adventure is just a page away. Discover timeless classics and modern gems—all in one place.
          </p>
          <button className="bg-indigo-900 mt-5 text-white px-6 py-2 rounded hover:bg-blue-700">
            Browse Books
          </button>
        </div>
        <div>
          <img src={book} className="w-full mx-auto h-1/2" />
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="py-12 bg-gray-50">
        <h2 className="text-3xl text-center font-semibold text-indigo-900 mb-6">Featured Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          {/* Loop through books (This is just an example, replace with dynamic content) */}
          <div className="p-4 border rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Book" className="w-full h-48 object-cover mb-4" />
            <h3 className="font-semibold text-lg text-center">Book Title</h3>
            <p className="text-center text-gray-600">Author Name</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Book" className="w-full h-48 object-cover mb-4" />
            <h3 className="font-semibold text-lg text-center">Book Title</h3>
            <p className="text-center text-gray-600">Author Name</p>
          </div>
          {/* Add more featured books here */}
        </div>
      </div>

        {/* Categories Section */}
        <div className="py-12 md:px-44 sm:px-0 ">
        <h2 className="text-3xl text-center font-semibold text-indigo-900 mb-6">Browse By Category</h2>
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


      {/* Testimonials Section */}
      <div className="bg-gray-50 py-12">
        <h2 className="text-3xl text-center font-semibold text-indigo-900 mb-6">What Our Readers Say</h2>
        <div className="flex justify-center space-x-8">
          <div className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
            <p className="text-lg text-gray-600 mb-4">"An amazing collection of books, so many genres to choose from!"</p>
            <p className="font-semibold text-indigo-900">John Doe</p>
            <p className="text-sm text-gray-500">Book Lover</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 max-w-xs text-center">
            <p className="text-lg text-gray-600 mb-4">"I discovered so many new books that I couldn't put down!"</p>
            <p className="font-semibold text-indigo-900">Jane Smith</p>
            <p className="text-sm text-gray-500">Book Enthusiast</p>
          </div>
          {/* Add more testimonials as needed */}
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="bg-indigo-900 text-white py-12">
        <h2 className="text-3xl text-center font-semibold mb-6">Stay Updated with Our Newsletter</h2>
        <p className="text-center text-lg mb-6">Get the latest book recommendations and updates directly in your inbox.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-lg text-gray-800 w-64"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
