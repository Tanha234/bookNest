import React from 'react';
import { FaBook, FaUsers, FaPenFancy } from 'react-icons/fa'; 
import about from '../../images/four.png'

function AboutUs() {
  return (
    <div className="py-12 md:px-44 sm:px-0">
      {/* Section 1: How Did We Build Our Website */}
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8 mb-12">
        <div className="p-6  text-black rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-indigo-900">How We Built Our Website</h2>
          <p className="text-lg">
            At BookNest, we wanted to create a space where book lovers could discover, share, and enjoy a vast collection of books.
            We built our website with a focus on simplicity and user experience. Using cutting-edge technologies like React and Node.js,
            along with a user-friendly interface powered by Tailwind CSS, we've ensured that browsing through books is as easy and enjoyable as reading them.
            Every detail is meticulously designed to give our users the best experience possible!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={about}
            alt="Website Development"
            className="w-full max-w-full "
          />
        </div>
      </div>

      {/* Section 2: What We Do */}
      <div className="text-center my-24 ">
        <h2 className="text-3xl font-semibold text-indigo-900 mb-6">What We Do</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At BookNest, our mission is to connect readers with the books they love. We offer a wide variety of genres—from timeless classics to modern bestsellers,
          all carefully curated for you. Whether you're looking to explore fiction, dive into educational resources, or discover your next thrilling adventure, we’ve got something for everyone.
          Our goal is to make the world of books more accessible and engaging for readers of all ages and interests.
        </p>
      </div>

      {/* Section 3: Our Services */}
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
        <div className="p-6 bg-white shadow-md rounded-lg">
          <FaBook className="mx-auto text-4xl text-indigo-900 mb-4" />
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Book Recommendations</h3>
          <p className="text-gray-600">
            Get personalized book recommendations based on your preferences. Whether you're into fiction, non-fiction, mystery, or fantasy, we’ll help you discover books you’ll love.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <FaUsers className="mx-auto text-4xl text-indigo-900 mb-4" />
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Reading Communities</h3>
          <p className="text-gray-600">
            Join a community of fellow book lovers! Share reviews, discuss your favorite books, and find new friends to connect with over shared literary interests.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg">
          <FaPenFancy className="mx-auto text-4xl text-indigo-900 mb-4" />
          <h3 className="text-2xl font-semibold text-indigo-900 mb-4">Author Spotlights</h3>
          <p className="text-gray-600">
            Explore the works of celebrated authors. We feature weekly author spotlights, interviews, and book insights to help you dive deeper into the stories you love.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
