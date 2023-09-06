// const BASE_URL = 'http://localhost:3000';

// // ======================================================== CREATE (POST)
// async function addBook(book) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(book),
//   };

//   const response = await fetch(`${BASE_URL}/books`, options);
//   const newBook = await response.json();

//   return newBook;

//   // const response = (await fetch(`${BASE_URL}/books`, options)).json();
//   // return response;
// }

// // addBook({
// //   title: 'The New Book NODE',
// //   author: 'Me',
// //   genres: ['Node'],
// //   rating: 9,
// // }).then(renderBook);

// function renderBook(book) {
//   console.log('Прийшла відповідь від бекенда');
//   console.log(book);
// }
