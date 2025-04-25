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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/books',
        element: <Books />
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
