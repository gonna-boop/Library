let myLibrary = []; // this is the array {of objects} that we will be displaying within the webpage
let i = 0;

// the below function does a few things.  First, it constructs a book object
// based on the information a user enters into the Modal/Form.
// From here, that information is pushed to the myLibrary Array.
// The function is triggered when a user hits the "submit" button.
const createBook = () => {
  const Book = {
    title: document.getElementById('Title').value,
    author: document.getElementById('Author').value,
    pages: document.getElementById('numPages').value,
    read: document.getElementById('flexCheckDefault').checked,
  };
  myLibrary.push(Book);
  document.forms[0].reset();
  console.warn('added', { myLibrary });
//   while (i < myLibrary.length) {
//     console.log(i);
//     // createBookCard();
//     i++;
//   }
};

// the code below "kicks off" the Javascript, so to speak.  When the "Add Book"
// button is clicked on the modal, the createBook() function will run
document.addEventListener('DOMContentLoaded', () => {
  const submit = document.getElementById('submit-btn');
  if (submit) {
    submit.addEventListener('click', createBook);
  }
});


// function createBookCard(Book) {
// }
