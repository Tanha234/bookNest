import React from 'react';
import book from '../../images/books-removebg-preview.png'

function Home() {
  return (
    <div className='grid  md:grid-cols-2 sm:grid-cols-1  place-items-center md:px-44 sm:px-0'>
      
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
        <img src={book}
        className="w-full mx-auto h-1/2"
        />
      </div>
     
    </div>
  )
}

export default Home
