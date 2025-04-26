// src/loaders/protectedBooksLoader.js
import { getAuth } from 'firebase/auth';

const protectedBooksLoader = async () => {
  const user = getAuth().currentUser;

  if (!user) {
    // Redirect to login if not authenticated
    throw new Response('', {
      status: 302,
      headers: {
        Location: '/login',
      },
    });
  }

  const response = await fetch(
    'https://www.googleapis.com/books/v1/volumes?q=harry+potter&startIndex=0&maxResults=40'
  );

  return response.json();
};

export default protectedBooksLoader;
