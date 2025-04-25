import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import about from '../../images/four.png'; // Ensure the image path is correct.

function Contact() {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your email-sending logic here, like using an email API service (e.g., EmailJS, SendGrid, etc.)
    console.log('Form submitted');
  };

  return (
    <div>
      {/* Contact Us Section */}
      <div className="py-12 bg-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-center md:px-44 sm:px-0">
          {/* Left Side: Image */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={about}
              alt="Contact Us"
              className="w-full h-auto"
            />
          </div>

          {/* Right Side: Form */}
          <div className="md:w-1/2 bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4 text-center">Send Us a Message</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number (Optional)"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 border rounded-lg"
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  className="mr-2"
                  required
                />
                <span className="text-gray-600">I agree to the terms and conditions</span>
              </div>
              <button type="submit" className="bg-indigo-900 text-white px-6 py-2 rounded hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Our Location Section */}
      <div className="py-12 bg-white">
        <h2 className="text-3xl text-center font-semibold text-indigo-900 mb-6">Our Location</h2>
        <div className="flex justify-center mb-6">
          {/* Embedding Google Map */}
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAP_EMBED_URL"
            width="600"
            height="450"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <p className="text-center text-lg text-gray-600">
          Visit us at our website to get more information about our services or just to chat about books! 
        </p>
      </div>

      {/* FAQ Section */}
      <div className="py-12 bg-white">
        <h2 className="text-3xl text-center font-semibold text-indigo-900 mb-6">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {[{
                question: "How can I purchase a book?",
                answer: "You can easily purchase books by selecting your desired book and clicking on the 'Buy Now' button on the book's page.",
              },
              {
                question: "Do you offer book recommendations?",
                answer: "Yes, we offer personalized book recommendations based on your preferences and reading history.",
              },
              {
                question: "Can I return a book?",
                answer: "We currently do not accept returns on books unless they are damaged during shipping. Please contact customer support for assistance.",
              },
              {
                question: "What types of books do you offer?",
                answer: "We offer a wide range of books including fiction, non-fiction, science fiction, fantasy, and more.",
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left text-xl font-semibold text-indigo-900 focus:outline-none"
                >
                  {faq.question}
                </button>
                {faqOpen === index && (
                  <div className="mt-2 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
