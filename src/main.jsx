import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import App from './App';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import BookDetail from './components/BookDetail/BookDetail';
import ListedBook from './components/ListedBook/ListedBook';
import AboutUs from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component

const fetchBooks = async () => {
  const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter&startIndex=0&maxResults=40');
  return response.json();
};

const fetchBookDetail = async ({ params }) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${params.bookId}`);
  return response.json();
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: fetchBooks, 
      },
      {
        path: '/books',
        element: <PrivateRoute element={<Books />} />, // Wrap the /books route with PrivateRoute
        loader: fetchBooks, 
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/books/:bookId',
        element: <BookDetail />,
        loader: fetchBookDetail,
      },
      {
        path: '/listedBook',
        element: <ListedBook />,
        loader: fetchBooks, 
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>
);
