const BASE_URL = 'http://localhost:3000';

// ======================================================== READ (GET)

// function fetchBooks() {
//   return fetch(`${BASE_URL}/books`).then(response => response.json());
// }

// function fetchBookById(bookId) {
//   return fetch(`${BASE_URL}/books/${bookId}`).then(response => response.json());
// }

// fetchBooks();
// fetchBookById(2);
// fetchBookById(4);

// ======================================================== CREATE (POST)

// function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   return fetch(`${BASE_URL}/books`, options).then(response => response.json());
// }

// addBook({
//   title: 'Test Book CSS',
//   author: 'Me',
//   genres: ['CSS'],
//   rating: 9,
// }).then(renderBook);

// addBook({
//   title: 'Test Book HTML',
//   author: 'Me',
//   genres: ['HTML'],
//   rating: 9,
// }).then(renderBook);

// function renderBook(book) {
//   console.log('Прийшла відповідь від бекенда');
//   console.log(book);
// }

// ======================================================== UPDATE (PATCH || PUT)

// function updateBookById(update, bookId) {
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(update),
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(response => response.json());
// }

// updateBookById({ title: 'Big New Test Book CSS' }, 10);
// updateBookById({ rating: 7 }, 9);
// updateBookById({ rating: 5, author: 'NotMe' }, 8);

// ======================================================== DELETE (DELETE)

// function removeBook(bookId) {
//   const options = {
//     method: 'DELETE',
//   };

//   return fetch(`${BASE_URL}/books/${bookId}`, options).then(response => response.json());
// }

// removeBook(6);
