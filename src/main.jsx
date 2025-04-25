import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // ✅ Import RouterProvider and createBrowserRouter
import ErrorPage from './components/ErrorPage';
import Home from './components/Home/Home';
import Books from './components/Books/Books';
import BookDetail from './components/BookDetail/BookDetail';
import ListedBook from './components/ListedBook/ListedBook';
import AboutUs from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader:()=>fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter&startIndex=0&maxResults=40')
      },
      {
        path: '/books',
        element: <Books />
      },
      {
        path: '/about',
        element: <AboutUs/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: 'books/:bookId',
        element: <BookDetail/>,
        loader:()=>fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter&startIndex=0&maxResults=40')
      },
      {
        path: '/listedBook',
        element: <ListedBook/>,
        loader:()=>fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter&startIndex=0&maxResults=40')
      
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>
);
