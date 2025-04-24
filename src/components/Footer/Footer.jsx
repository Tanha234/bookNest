import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p>We are an online bookstore offering a wide selection of books across all genres. Find your next great read today!</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Books</a></li>
              <li><a href="#" className="hover:text-blue-400">Best Sellers</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul>
              <li>Email: contact@booknest.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Book St., Book City, BK 12345</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <i className="fab fa-facebook-f text-xl"></i> {/* Facebook icon */}
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <i className="fab fa-twitter text-xl"></i> {/* Twitter icon */}
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <i className="fab fa-instagram text-xl"></i> {/* Instagram icon */}
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-500">
                <i className="fab fa-linkedin-in text-xl"></i> {/* LinkedIn icon */}
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 border-t pt-4">
          <p>&copy; 2025 BookNest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
