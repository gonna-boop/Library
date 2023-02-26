let i = 1;
const div = document.createElement('div');
// function Book(title, author, pages) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
// //   this.read = read;
// }
// const hobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 304);

let myLibrary = [];

// function addBookToLibrary() {
// }

function createBookCard(Book) {
  const bookCard = document.createElement('div');
  bookCard.className = 'col-md';
}

const createBook = (e) => {
  e.preventDefault();
  const Book = {
    title: document.getElementById('Title').value,
    author: document.getElementById('Author').value,
    pages: document.getElementById('numPages').value,
  };
  myLibrary.push(Book);
  document.forms[0].reset();

  console.warn('added', { myLibrary });
  //   console.log(Book);

  while (i < myLibrary.length) {
    console.log(i);
    createBookCard();
    i++;
  }
};

/* <div class="col-md">3</div> */

document.addEventListener('DOMContentLoaded', () => {
  const submit = document.getElementById('submit-btn');
  if (submit) {
    submit.addEventListener('click', createBook);
  }
});
