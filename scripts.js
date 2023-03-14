let myLibrary = []; // this is the array {of objects} that we will be displaying within the webpage
let i = 0; // for creating new book cards
let Book = []; // myLibrary contains Books
let id = 0; // for assigning each card a unique data ID

function createBookCard(Book) {
  const newDiv = document.createElement('div');
  const bookTemplate = '<div class="col-md">'
+ '<div class="card bg-primary text-light">'
  + '<div class="card-body text-center">'
    + '<div class="mb-2">'
      + '<i class="bi bi-book"></i></div>'
    + '<h3 class="card-title">'
        + `${Book.title}`
            + '</h3>'
        + '<p class="card-text">'
        + `${Book.author}`
            + '</p>'
        + '<p class="card-text">'
        + `${Book.pages}` 
        + ' pages'
        + '</p>'
        + '<button type="button" class="btn btn-outline-light" data-remove-id='
        + `${Book.id = id}`
        + ' onClick="removeBook('
        + `${id}`
        + ')" id="remove-btn">Remove</button>'
        + '</div></div></div>';
  newDiv.dataset.id = id;
  id++;
  newDiv.innerHTML += bookTemplate;
  document.getElementById('bookGrid').appendChild(newDiv);
  return Book;
}
// the below function does a few things.  First, it constructs a book object
// based on the information a user enters into the Modal/Form.
// From here, that information is pushed to the myLibrary Array.
// The function is triggered when a user hits the "submit" button.
const createBook = () => {
  Book = {
    title: document.getElementById('Title').value,
    author: document.getElementById('Author').value,
    pages: document.getElementById('numPages').value,
    read: document.getElementById('flexCheckDefault').checked,
  };
  myLibrary.push(Book);
  document.forms[0].reset();
  while (i < myLibrary.length) {
    createBookCard(myLibrary[i]);
    i++;
  }
  return Book;
};

function removeBook(id) {
  // record id of the remove button that was used
  let selected = document.querySelector(`[data-remove-id="${id}"]`);
  // let selected = document.querySelector(`[data-remove-id="${id}"]`);
  let selectedId = selected.dataset.removeId;
  let newDiv = document.querySelector(`[data-id="${selectedId}"]`);
  newDiv.remove();
  // match the button id with the id of the card
  // remove associated ID
}

// the code below "kicks off" the Javascript, so to speak.  When the "Add Book"
// button is clicked on the modal, the createBook() function will run
document.addEventListener('DOMContentLoaded', () => {
  const submit = document.getElementById('submit-btn');
  if (submit) {
    submit.addEventListener('click', createBook);
  }
});
