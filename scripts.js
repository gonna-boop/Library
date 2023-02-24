const hobbit = new Book("The Hobbit", "J.R.R. Tolkein", 304);

let myLibrary = [hobbit];
// first step: figure out how to display items within this array
// as a card on the page

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
//   this.read = read;
}

function addBookToLibrary() {
//   const addBook = (e) => {
//     e.preventDefault(); // stops form from submitting
//     let book = {
//         title: document.getElementById('title').value,
//         author: document.getElementById('author').value,
//         pages: document.getElementById('pages').value,
//     }
//   }
}

// at this point here is what needs to be done
// the submit button on the form needs to take the
// inputs and create a book object with them
// that object then needs to be displayed as a card
// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const fd = new FormData(form);
//   const obj = Object.fromEntries(fd);
//   console.log(obj);
// });
